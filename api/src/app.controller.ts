import { BadRequestException, Body, Controller, ForbiddenException, Get, Headers, HttpCode, InternalServerErrorException, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { z, ZodError, ZodIssue } from 'zod';
import { CreateUserSchema } from './users/schema/create.schema';
import { Response } from 'express';
import { Public } from './auth/decorators/public.decorator';
import { RefreshGuard } from './auth/guards/refresh.guard';
import { jwtDecode } from 'jwt-decode';

@Controller()
export class AppController {
  private _schema = {
    login: z.object({
      email: z.string().trim().email().min(3),
      password: z.string().trim().min(6)
    }),
    refresh: z.object({
      refreshToken: z.string().trim().min(12)
    }),
    register: CreateUserSchema
  } as const;

  constructor(private authService: AuthService) { }

  @Public()
  @Post('auth/login')
  async login(@Body() body: object, @Res() res: Response) {
    const parsed = this._schema.login.parse(body);
    const tokens = await this.authService.login(parsed);

    res.setHeaders(
      new Map([
        ['x-authorization', `Bearer ${tokens.accessToken}`],
        ['x-refresh', tokens.refreshToken]
      ])
    );

    console.info({
      res: res
    });


    return res.status(200).send();
  }

  @Get('auth/logout')
  async logout(@Body() body: object, @Headers('authorization') authorization: string | null) {
    const rt = (body as { refreshToken: string; }).refreshToken;

    if (!rt || !authorization) {
      throw new BadRequestException();
    }

    const token = (authorization ?? '').replace(/bearer\s+/i, '');

    try {
      const { sub } = jwtDecode(token)!;
      const { sub: rtSub } = jwtDecode(rt)!;

      if (rtSub !== sub) {
        throw new Error('Invalid payload');
      }

      await this.authService.logout(sub!, (body as { refreshToken: string; }).refreshToken);

      return;
    } catch {
      throw new InternalServerErrorException();
    }
  }

  @Public()
  @Post('auth/register')
  async register(@Body() body: object) {
    const parsed = this._schema.register.parse(body);
    return await this.authService.register(parsed);
  }

  @Public()
  @UseGuards(RefreshGuard)
  @Post('auth/refresh')
  async refresh(@Body() body: object, @Headers('authorization') authorization: string | null, @Res() res: Response) {
    try {
      const parsed = this._schema.refresh.parse(body);
      const token = (authorization ?? '').replace(/bearer\s+/i, '');

      if (!token) {
        throw new ForbiddenException();
      }

      const tokens = await this.authService.refresh(token, parsed.refreshToken);

      res.setHeaders(
        new Map([
          ['x-authorization', `Bearer ${tokens.accessToken}`],
          ['x-refresh', tokens.refreshToken]
        ])
      );

      return res.status(200).send();
    } catch {
      throw new ForbiddenException();
    }
  }

  @Get('profile')
  async profile(@Headers('authorization') authorization: string | null) {
    const token = (authorization ?? '').replace(/bearer\s+/i, '');

    try {
      const { sub } = jwtDecode(token)!;

      return await this.authService.getUser({ id: sub! });
    } catch {
      throw new InternalServerErrorException();
    }
  }
}

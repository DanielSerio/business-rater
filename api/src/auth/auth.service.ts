import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { RefreshPayloadParams, SessionPayloadParams } from 'src/shared/types/jwt.types';
import { RegisterBody } from 'src/users/schema/create.schema';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  private REFRESH_SECRET: string;

  constructor(
    config: ConfigService,
    private prisma: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService
  ) {
    this.REFRESH_SECRET = config.get('JWT_REFRESH_SECRET')!;
  }

  private async getTokens(payload: SessionPayloadParams) {
    const refreshPayload = {
      eml: payload.eml,
      sub: payload.sub
    } satisfies RefreshPayloadParams;

    const sessionPayload = {
      ...refreshPayload,
      img: payload.img,
      rol: payload.rol,
      unm: payload.unm
    } satisfies SessionPayloadParams;

    const refreshToken = await this.jwtService.sign(refreshPayload, {
      secret: this.REFRESH_SECRET,
      expiresIn: '7d'
    });
    const accessToken = await this.jwtService.sign(sessionPayload);

    return {
      refreshToken,
      accessToken
    };
  }

  async register(body: RegisterBody) {
    return await this.usersService.register(body);
  }

  async isTokenExpired(token: string) {
    return await this.prisma.expiredRefreshToken.count({
      where: {
        token
      }
    }) > 0;
  }

  async verifyCredentials({ email, password }: { email: string; password: string; }) {
    const userResult = await this.usersService.getForCredential({ email });

    if (userResult) {
      const isValidPassword = await bcrypt.compareSync(password, userResult.hash);

      if (!isValidPassword) {
        return null;
      }

      return userResult.user;
    }


    return null;
  }

  async getUser({ id }: { id: string; }) {
    const result = await this.usersService.getForCredential({ id });

    if (result) {
      return result.user;
    }

    return null;
  }

  async login(creds: { email: string; password: string; }) {
    const verified = await this.verifyCredentials(creds);

    console.log(verified);

    if (!verified) {
      throw new UnauthorizedException();
    }

    return this.getTokens({
      sub: verified.id,
      eml: verified.email,
      unm: verified.Account?.username ?? null,
      img: verified.Account?.profileImageId ?? null,
      rol: verified.role
    });
  }

  async logout(id: string, refreshToken: string) {
    await this.prisma.expiredRefreshToken.create({
      data: {
        token: refreshToken
      }
    });

    await this.usersService.updateRefreshToken(id, '');
  }

  async refresh(id: string, token: string) {
    const user = await this.getUser({ id });
    const isExpired = await this.isTokenExpired(token);
    const verified = await this.jwtService.verify(token);

    if (!verified || isExpired) {
      throw new ForbiddenException();
    }

    const data = user!;

    const tokens = await this.getTokens({
      sub: data.id,
      eml: data.email,
      rol: data.role,
      unm: data.Account?.username ?? null,
      img: data.Account?.ProfileImage?.id ?? null
    });

    await this.prisma.expiredRefreshToken.create({
      data: {
        token
      }
    });
    await this.usersService.updateRefreshToken(data.id, tokens.refreshToken);

    return tokens;
  }
}

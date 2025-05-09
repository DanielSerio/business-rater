import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";

import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtGuard implements CanActivate {
  SESSION_SECRET = '';

  constructor(
    config: ConfigService,
    private reflector: Reflector,
    private jwtService: JwtService
  ) {
    this.SESSION_SECRET = config.get('JWT_SESSION_SECRET')!;
  }

  private getRequest = (context: ExecutionContext) => {
    return context.switchToHttp().getRequest() as Request;
  };

  private isPublicContext = (context: ExecutionContext) => {
    return this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
  };

  private isValidJWT(token: string) {
    return this.jwtService.verify(token, { secret: this.SESSION_SECRET, });
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    if (this.isPublicContext(context)) {
      return true;
    }

    const request = await this.getRequest(context);
    const auth = request.headers['authorization'];
    const accessToken = (auth ?? '').replace(/^bearer\s+/i, '');

    if (!accessToken) {
      return false;
    }

    try {
      this.isValidJWT(accessToken);
    } catch (err) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
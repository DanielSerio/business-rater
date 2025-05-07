import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) { }

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
    return this.jwtService.verify(token);
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

    return this.isValidJWT(accessToken);
  }
}
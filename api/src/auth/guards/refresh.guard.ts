import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { jwtDecode } from "jwt-decode";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RefreshGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  private getRequest = (context: ExecutionContext) => {
    return context.switchToHttp().getRequest() as Request;
  };

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = await this.getRequest(context);
    const body = await request.json();
    const auth = request.headers['authorization'];
    const accessToken = (auth ?? '').replace(/^bearer\s+/i, '');

    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);

    return !!body.refreshToken && decoded.sub === body.refreshToken;
  }
}
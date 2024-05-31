import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { SECRET } from 'src/config/index';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('无效的token');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: SECRET,
      });
      // 💡 在这里我们将 payload 挂载到请求对象上
      // 以便我们可以在路由处理器中访问它
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('无效的token');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    return (request.headers.token as string) || undefined;
  }
}

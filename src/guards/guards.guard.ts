import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Observable } from 'rxjs';

@Injectable()
export class GuardsGuard implements CanActivate {
  canActivate( context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const openRouter = ['/api/auth/login', '/api/auth/register', '/api/auth/forget-password'];
    if(openRouter.includes(req.url) || req.url.startsWith(`${process.env.LOCAL_RESET_PASSWORD_PATH}`)) { return true;}
    const authHeader = req.headers['authorization'];
    if(!authHeader || !authHeader.startsWith('Bearer')) {
      throw new UnauthorizedException('Thiếu token');
    }
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!)
      req['user'] = decoded;
       return true;
    } catch (err) {
      throw new UnauthorizedException('Token không hợp lệ hoặc đã hết hạn');
    }
  }
}

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import AppError from '../utils/AppError';
import { ErrorCode } from '../utils';
import configuration from 'src/libs/configuration';

const config = configuration();

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    //console.log('Extract token', token);
    if (!token) {
      throw new AppError(ErrorCode['0002'], 'Token not found');
    }

    try {
      const payload = this.jwtService.verifyAsync(token, {
        secret: config.jwt.secretKey,
      });
      //console.log('payload', payload);
      request['user'] = payload;
      //console.log('request Id', request);
    } catch (e) {
      console.log('Token verification error', e);
      throw new AppError(ErrorCode['0002'], 'Token Verification failed');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    return request.headers.authorization?.split(' ')[1];
  }
}

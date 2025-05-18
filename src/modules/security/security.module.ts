import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../bks-module';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenSchema } from '../db-module/schema/refresh-token.schema';
import {
  AuthenticationController,
  AuthenticationService,
} from './Authentication';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RefreshToken', schema: RefreshTokenSchema },
    ]),
    UserModule,
  ],
  providers: [AuthenticationService, JwtService],
  controllers: [AuthenticationController],
  exports: [AuthenticationService, JwtService, MongooseModule],
})
export class SecurityModule {}

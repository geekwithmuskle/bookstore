import { Module } from '@nestjs/common';
import { AuthController } from './controller';
import { AuthService } from './service';
import { UserModule } from '../user';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenSchema } from 'src/modules/db-module/schema/refresh-token.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RefreshToken', schema: RefreshTokenSchema },
    ]),
    UserModule,
  ],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  exports: [AuthService, JwtService, MongooseModule],
})
export class AuthenticationModule {}

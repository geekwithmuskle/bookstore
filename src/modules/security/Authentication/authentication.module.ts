import { Module } from '@nestjs/common';
import { AuthenticationService } from './service';
import { AuthenticationController } from './controller';
import { UserModule } from 'src/modules/bks-module';
import { MongooseModule } from '@nestjs/mongoose';
import { RefreshTokenSchema } from 'src/modules/db-module/schema/refresh-token.schema';
import { JwtService } from '@nestjs/jwt';

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
export class AuthenticationModule {}

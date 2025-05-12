import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../db-module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, JwtService],
  exports: [UserService, MongooseModule],
})
export class UserModule {}

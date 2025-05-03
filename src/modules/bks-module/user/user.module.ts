import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../db-module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

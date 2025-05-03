import { Module } from '@nestjs/common';
import { AuthController } from './controller';
import { AuthService } from './service';

@Module({
  imports: [],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [],
})
export class AuthenticationModule {}

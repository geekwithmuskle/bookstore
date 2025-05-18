import { Module } from '@nestjs/common';
import { EmailService } from './service';
import { EmailController } from './controller';

@Module({
  providers: [EmailService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class MailModule {}

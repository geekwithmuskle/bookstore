import { Module } from '@nestjs/common';
import { OrderModule } from './order';
import { UserModule } from './user';
import { BookModule } from './book';
import { ReviewModule } from './review';

@Module({
  imports: [OrderModule, UserModule, BookModule, ReviewModule],
  exports: [OrderModule, UserModule, BookModule, ReviewModule],
})
export class ClientModule {}

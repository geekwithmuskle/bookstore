import { Module } from '@nestjs/common';
import { DbModule } from './db-module';
import { BookModule } from './book';
import { UserModule } from './user';
import { ReviewModule } from './review/review.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [DbModule, OrderModule, UserModule, BookModule, ReviewModule],
})
export class ResourceModule {}

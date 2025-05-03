import { Module } from '@nestjs/common';
import { DbModule } from './db-module';
import { BookModule } from './bks-module/book';
import { UserModule } from './bks-module/user';
import { ReviewModule } from './bks-module/review/review.module';
import { OrderModule } from './bks-module/order/order.module';
import { AuthenticationModule } from './bks-module';

@Module({
  imports: [
    DbModule,
    OrderModule,
    UserModule,
    BookModule,
    ReviewModule,
    AuthenticationModule,
  ],
})
export class ResourceModule {}

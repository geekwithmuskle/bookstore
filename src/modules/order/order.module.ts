import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from '../db-module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Order',
        schema: OrderSchema,
      },
    ]),
  ],
})
export class OrderModule {}

import { Module } from '@nestjs/common';
import { CartItemSchema } from '../db-module/schema/cart-item.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'CartItem',
        schema: CartItemSchema,
      },
    ]),
  ],
  providers: [],
  controllers: [],
})
export class CartModule {}

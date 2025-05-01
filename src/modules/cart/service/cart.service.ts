import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICartItem } from 'src/modules/db-module/schema/cart-item.schema';

@Injectable()
export class CartService {
  constructor(
    @InjectModel('CartItem') private readonly cartModel: Model<ICartItem>,
  ) {}

  create() {}

  update() {}
}

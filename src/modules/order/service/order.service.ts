import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IOrder } from 'src/modules/db-module';

@Injectable()
export class OrderService {
  constructor(private readonly orderModel: Model<IOrder>) {}

  createOrrder() {}

  update() {}

  delete() {}
}

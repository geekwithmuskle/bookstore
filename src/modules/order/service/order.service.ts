import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOrder } from 'src/modules/db-module';
import { CreateOrderDto } from '../dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<IOrder>,
  ) {}

  createOrrder(orderDto: CreateOrderDto) {
    const response = new this.orderModel(orderDto);
    return response;
  }

  update() {}

  delete() {}
}

import { Controller, Post } from '@nestjs/common';
import { OrderService } from '../service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/order')
  async create() {}
}

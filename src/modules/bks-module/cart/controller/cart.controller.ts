import { Controller } from '@nestjs/common';
import { CartService } from '../service';

@Controller('cart-items')
export class CartController {
  constructor(private cartItemService: CartService) {}
}

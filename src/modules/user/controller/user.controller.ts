import { Controller, Post } from '@nestjs/common';
import { UserService } from '../service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('user')
  async create() {}
}

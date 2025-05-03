import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../service';
import { CreateUserDto } from '../dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('user')
  async create(@Body() userDto: CreateUserDto) {
    const response = this.userService.create(userDto);

    return response;
  }
}

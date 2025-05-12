import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../service';
import { CreateUserDto } from '../dto';
import { AuthenticationGuard, ResponseFormat } from 'src/shared';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('JWT')
@UseGuards(AuthenticationGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('user')
  async create(@Res() res, @Req() req, @Body() userDto: CreateUserDto) {
    const response = this.userService.create(userDto);

    if (!response) {
      ResponseFormat.failureResponse(res, null, 'Sign-up failed');
    }
    return ResponseFormat.successResponse(res, response, 'Sign-up successful');
  }

  @Get('user/jwt-config')
  async someProtectedRoute(@Res() res) {
    const response = 'Succesful JWT Verification setup';
    if (!response) {
      ResponseFormat.failureResponse(res, null, 'Testing FAILED');
    }

    return ResponseFormat.successResponse(res, response, 'Testing Succesful');
  }
}

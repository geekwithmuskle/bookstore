import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service';
import { SignupDto } from '../dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Signup
  @Post('signup')
  async signUp(@Body() signupData: SignupDto) {}

  // Login
  @Post('login')
  async login() {}

  // Refresh Token
}

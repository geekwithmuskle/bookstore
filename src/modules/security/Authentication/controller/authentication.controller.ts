import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginDto, RefreshTokenDto, SignupDto } from '../dto';
import { ResponseFormat } from 'src/shared';
import { AuthenticationService } from '../service';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  // Signup
  @Post('signup')
  async signUp(@Res() res, @Body() signupData: SignupDto) {
    const data = await this.authService.signup(signupData);

    if (!data) {
      throw new ResponseFormat.failureResponse(
        res,
        null,
        'Registration failed!',
      );
    }

    return ResponseFormat.successResponse(res, data, 'Registration succesful');
  }

  // Login
  @Post('login')
  async login(@Res() res, @Body() credantials: LoginDto) {
    const response = await this.authService.login(credantials);

    if (!response) {
      throw new ResponseFormat.failureResponse(
        res,
        null,
        'Invalid Credentials',
      );
    }

    return ResponseFormat.successResponse(res, response, 'User LoggedIn');
  }

  // Refresh Token
  @Post('refresh')
  async refreshToken(@Res() res, @Body() data: RefreshTokenDto) {
    const response = await this.authService.generateRefreshTokens(
      data.refreshtoken,
    );

    if (!response) {
      throw new ResponseFormat.failureResponse(
        res,
        null,
        'Failed to generate token',
      );
    }

    return ResponseFormat.successResponse(
      res,
      response,
      'Token request granted',
    );
  }
}

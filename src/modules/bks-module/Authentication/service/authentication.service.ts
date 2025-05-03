import { Injectable } from '@nestjs/common';
import { SignupDto } from '../dto';

@Injectable()
export class AuthService {
  async signup(signupData: SignupDto) {

    // Check if email is in use
  }
}

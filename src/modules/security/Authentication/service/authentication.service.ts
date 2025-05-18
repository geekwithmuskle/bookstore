import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import configuration from 'src/libs/configuration';
import { User } from 'src/modules/db-module';
import { IRefreshToken } from 'src/modules/db-module/schema/refresh-token.schema';
import { LoginDto, SignupDto } from '../dto';
import AppError from 'src/shared/utils/AppError';
import { ErrorCode } from 'src/shared';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const config = configuration();
@Injectable()
export class AuthenticationService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    @InjectModel('RefreshToken')
    private refreshTokenModel: Model<IRefreshToken>,
    private jwtService: JwtService,
  ) {}

  async signup(signupData: SignupDto) {
    const { email, password, name } = signupData;
    // Check if email is in use
    const emailInUse = await this.UserModel.findOne({
      email: signupData.email,
    });

    if (emailInUse) {
      throw new AppError(ErrorCode['0002'], 'User exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user document and save in mongodb

    return await this.UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
  }

  async login(credentials: LoginDto) {
    const { email, password } = credentials;
    // check if email exist
    const user = await this.UserModel.findOne({
      email,
    });

    if (!user) {
      throw new AppError(ErrorCode['0002'], 'User does not exist');
    }

    // compare entered password with existing one
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError(ErrorCode['0005'], 'Invalid Credentials');
    }

    // Generate jwt tokens
    const access_token = await this.generateUserTokens(user._id);
    const userId = user._id;

    return { ...access_token, userId };
  }

  async generateRefreshTokens(refreshtoken: string) {
    const token = await this.refreshTokenModel.findOne({
      token: refreshtoken,
      expiryDate: { $gte: new Date() },
    });

    if (!token) {
      throw new AppError(ErrorCode['0005'], 'Invalid Credentials');
    }

    return this.generateUserTokens(token.userId);
  }

  async generateUserTokens(userId: Types.ObjectId) {
    const accessToken = await this.jwtService.sign(
      { userId },
      { expiresIn: '1hr', secret: config.jwt.secretKey },
    );

    const refreshToken = uuidv4();

    await this.storeRefreshToken(refreshToken, userId);

    return { accessToken, refreshToken };
  }

  async storeRefreshToken(token: string, userId) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 1);
    const response = await this.refreshTokenModel.updateOne(
      {
        userId,
      },
      {
        $set: { token, expiryDate, userId },
      },
      { upsert: true },
    );

    if (!response) {
      throw new AppError(ErrorCode['0002'], 'Error accomodating token');
    }

    return response;
  }
}

import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

const config: ConfigService = new ConfigService();

export default () => ({
  app: {
    name: config.get<string>('APP_NAME'),
    port: config.get<number>('APP_PORT') || 3000,
    timezone: config.get<string>('APP_TIMEZONE') || 'Africa/Lagos',
  },
  mongodb: {
    url: config.get<string>('MONGODB_URL'),
  },

  jwt: {
    secretKey: config.get<string>('JWT_SECRET_KEY'),
    refreshToken: config.get<string>('JWT_REFRESH_TOKEN_KEY'),
  },
  google: {
    client_id: config.get<string>('GMAIL_CLIENT_ID'),
    client_secret: config.get<string>('GMAIL_CLIENT_SECRET'),
    refresh_token: config.get<string>('GMAIL_REFRESH_TOKEN'),
    redirect_url: config.get<string>('GMAIL_REDIRECT_URL'),
    verified_gmail: config.get<string>('VERIFIED_GMAIL'),
  },

  email: {
    host: config.get<string>('EMAIL_HOST'),
    port: config.get<number>('EMAIL_PORT'),
    user: config.get<string>('EMAIL_USER'),
    password: config.get<string>('EMAIL_PASSWORD'),
  },
});

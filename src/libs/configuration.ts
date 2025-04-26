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
});

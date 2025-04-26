import { Module } from '@nestjs/common';
import { GlobalExceptionFilter } from './shared';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}

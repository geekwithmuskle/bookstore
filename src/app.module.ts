import { Module } from '@nestjs/common';
import { GlobalExceptionFilter } from './shared';
import { APP_FILTER } from '@nestjs/core';
import { ResourceModule } from './modules';

@Module({
  imports: [ResourceModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}

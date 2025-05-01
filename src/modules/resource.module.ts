import { Module } from '@nestjs/common';
import { DbModule } from './db-module';
import { BookModule } from './book';
import { UserModule } from './user';

@Module({
  imports: [DbModule, BookModule, UserModule],
})
export class ResourceModule {}

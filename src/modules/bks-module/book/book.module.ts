import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from './service/book.service';
import { BookController } from './controller/book.controller';
import { BookSchema } from '../../db-module/schema/book.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Book',
        schema: BookSchema,
      },
    ]),
  ],
  providers: [BookService, JwtService],
  controllers: [BookController],
})
export class BookModule {}

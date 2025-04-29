import { Module } from '@nestjs/common';
import { Book, bookSchema } from '../db-module/schema/books.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: bookSchema,
      },
    ]),
  ],
  providers: [],
  controllers: [],
})
export class BookModule {}

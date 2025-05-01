import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDto } from '../dto';
import { IBook } from 'src/modules/db-module';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book')
    private readonly bookModel: Model<IBook>,
  ) {}

  createBook(bookDto: BookDto) {
    const newBook = new this.bookModel(bookDto);
    return newBook.save();
  }

  getBooks() {
    const result = this.bookModel.find();
    return result;
  }
}

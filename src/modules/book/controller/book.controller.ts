import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookDto } from '../dto';
import { BookService } from '../service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post('/book')
  async create(@Body() bookDto: BookDto) {
    console.log(BookDto);
    const response = this.bookService.createBook(bookDto);
    return response;
  }

  @Get('/books')
  async getall() {
    const response = this.bookService.getBooks();
    return response;
  }
}

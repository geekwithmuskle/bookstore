import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BookDto } from '../dto';
import { BookService } from '../service';
import { AuthenticationGuard } from 'src/shared';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('JWT')
@UseGuards(AuthenticationGuard)
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

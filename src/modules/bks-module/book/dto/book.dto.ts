import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class BookDto {
  @ApiProperty({
    description: 'Title',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'author' })
  @IsOptional()
  author?: string;

  @ApiProperty({ description: 'genre' })
  @IsOptional()
  genre?: string;

  @ApiProperty({ description: 'isbn number' })
  @IsString()
  @IsOptional()
  isbn?: string;

  @ApiProperty({ description: 'book price' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: 'year of publication' })
  @IsNumber()
  publication_year?: number;

  @ApiProperty({ description: 'summary of book' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'coverImage' })
  @IsString()
  @IsOptional()
  coverImage?: string;
}

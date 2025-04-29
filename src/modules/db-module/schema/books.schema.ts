import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

interface IBooks {
  title: string;
  isbn: string;
  price: number;
  publication_year: string;
  description: string;
  publisher_id: string;
}

@Schema()
export class Book implements IBooks {
  @Prop()
  title: string;

  @Prop()
  isbn: string;

  @Prop()
  price: number;

  @Prop()
  publication_year: string;

  @Prop()
  description: string;

  @Prop()
  publisher_id: string;
}

export const bookSchema = SchemaFactory.createForClass(Book);

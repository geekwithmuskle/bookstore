import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

interface IAuthor {
  name: string;
  bio: string;
}

@Schema()
export class Author implements IAuthor {
  @Prop()
  name: string;

  @Prop()
  bio: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);

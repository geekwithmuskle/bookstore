import { Schema } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  genre?: string;
  description?: string;
  price: number;
  stock: number;
  isbn?: string;
  coverImage?: string;
  publication_year?: number;
}

export const BookSchema: Schema<IBook> = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: false },
    description: String,
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    isbn: { type: String, unique: true },
    publication_year: { type: Number, required: false },
    coverImage: String,
  },
  { timestamps: true },
);

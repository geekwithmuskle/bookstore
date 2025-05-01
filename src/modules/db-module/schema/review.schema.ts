import mongoose, { Schema } from 'mongoose';

export interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  book: mongoose.Types.ObjectId;
  rating: number;
  comment?: string;
}

export const ReviewSchema: Schema<IReview> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
  },
  { timestamps: true },
);

import mongoose, { Schema } from 'mongoose';

export interface ICartItem extends Document {
  user: mongoose.Types.ObjectId;
  book: mongoose.Types.ObjectId;
  quantity: number;
}

export const CartItemSchema: Schema<ICartItem> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

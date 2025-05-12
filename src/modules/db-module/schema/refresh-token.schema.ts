import mongoose, { Schema } from 'mongoose';

export interface IRefreshToken extends Document {
  token: string;
  userId: mongoose.Types.ObjectId;
  expiryDate: Date;
}

export const RefreshTokenSchema: Schema<IRefreshToken> = new Schema({
  token: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  expiryDate: { type: Date, required: true },
});

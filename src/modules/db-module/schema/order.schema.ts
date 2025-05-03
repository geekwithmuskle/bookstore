import mongoose, { Schema } from 'mongoose';
import { OrderStatus } from 'src/modules/order';

export interface IOrderItem {
  //book: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
}

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  status: OrderStatus;
}

export const OrderSchema: Schema<IOrderItem> = new Schema(
  {
    // user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // items: [
    //   {
    //     book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    //     quantity: { type: Number, required: true },
    //     price: { type: Number, required: true },
    //   },
    // ],
    // totalAmount: { type: Number, required: true },
    // status: {
    //   type: String,
    //   enum: Object.values(OrderStatus),
    //   default: OrderStatus.PENDING,
    // },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true },
);

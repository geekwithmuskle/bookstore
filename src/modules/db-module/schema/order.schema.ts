import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export enum Status {
  PENDING = 'pending',
  PAID = 'paid',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

export interface IOrderItem {
  book: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
}

export interface IOrder {
  user: mongoose.Types.ObjectId | User;
  items: IOrderItem[];
  totalAmount: number;
  status: Status;
}

@Schema()
export class OrderItem implements IOrderItem {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true })
  book: mongoose.Types.ObjectId;

  @Prop({ required: true, min: 1 })
  quantity: number;

  @Prop({ required: true, min: 0 })
  price: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema({
  timestamps: true,
})
export class Order implements IOrder {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ type: [OrderItemSchema], required: true })
  items: OrderItem[];

  @Prop({ required: true, min: 0 })
  totalAmount: number;

  @Prop({
    type: String,
    enum: Status,
    default: Status.PENDING,
    required: true,
  })
  status: Status;
}

export type OrderDocument = mongoose.HydratedDocument<Order>;
export const OrderSchema = SchemaFactory.createForClass(Order);

// export const OrderSchema: Schema<IOrderItem> = new Schema(
//   {
//     // user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     // items: [
//     //   {
//     //     book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
//     //     quantity: { type: Number, required: true },
//     //     price: { type: Number, required: true },
//     //   },
//     // ],
//     // totalAmount: { type: Number, required: true },
//     // status: {
//     //   type: String,
//     //   enum: Object.values(OrderStatus),
//     //   default: OrderStatus.PENDING,
//     // },
//     quantity: { type: Number, required: true },
//     price: { type: Number, required: true },
//   },
//   { timestamps: true },
// );

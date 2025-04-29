import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  shipping_address: string;
}

@Schema()
export class User implements IUser {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  shipping_address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// import mongoose, { Document, Model, Schema } from 'mongoose';
// import { UserRole } from 'src/modules/user';

// export const UserSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, unique: true, required: true },
//     password: { type: String, required: true },
//     role: {
//       type: String,
//       default: UserRole.USER.toString(),
//       required: true,
//     },
//   },
//   {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//     timestamps: true,
//   },
// );

// export interface IUser extends Document {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
// }

// export type UserDocument = HydratedDocument<User>;

// @Schema()
// export class User {

//   @Prop()
//   name: string;

//   @Prop()
//   email: string;

//   @Prop()
//   password: string;

//   @Prop()
//   role: string[]
// }

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

interface IUser {
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

@Schema({
  timestamps: true, // Adds createdAt and updatedAt timestamps
})
export class User implements IUser {
  @Prop({
    required: true,
    minlength: 2,
    maxlength: 100,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  })
  email: string;

  @Prop({
    required: true,
    minlength: 6,
  })
  password: string;

  @Prop({
    type: String,
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  createdAt: Date;
  updatedAt: Date;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);

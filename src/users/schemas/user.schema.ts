import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User as UserInterface } from '../interfaces/user.interface'
import { Schema as MongooseSchema } from "mongoose";

export type UserDocument = UserInterface & Document

@Schema({timestamps: true})
export class User {
  _id: MongooseSchema.Types.ObjectId

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  createdAt?: Date

  @Prop()
  updatedAt?: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
import { Document } from "mongoose";

export interface User extends Document {
  readonly _id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone?: string;
  readonly password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
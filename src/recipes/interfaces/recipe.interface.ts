import { Document } from 'mongoose';

export interface Recipe extends Document {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly creationDate: Date;
  readonly ingredients: [string];
}

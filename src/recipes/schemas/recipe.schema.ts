import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Recipe as RecipeInterface } from '../interfaces/recipe.interface';
import { Document } from 'mongoose';

export type RecipeDocument = RecipeInterface & Document;

@Schema()
export class Recipe {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ default: Date.now })
  creationDate: Date;

  @Prop({ type: [String], required: true })
  ingredients: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

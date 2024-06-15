import { InjectModel } from '@nestjs/mongoose';
import { RecipeDocument } from './schemas/recipe.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Recipe } from './models/recipes.model';
import { Recipe as RecipeInterface } from './interfaces/recipe.interface';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
  ) {}

  async create(recipe: {
    title: string;
    description: string;
    ingredients: string[];
  }): Promise<RecipeInterface> {
    const newRecipe = new this.recipeModel(recipe);
    return newRecipe.save();
  }

  async findOneById(id: string): Promise<RecipeInterface> {
    return this.recipeModel.findById(id).exec();
  }

  async findAll(title?: string): Promise<RecipeInterface[]> {
    const filter: any = {};
    if (title) {
      filter.title = { $regex: title, $options: 'i' };
    }
    return this.recipeModel.find(filter).exec();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

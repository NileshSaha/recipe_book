import { InjectModel } from '@nestjs/mongoose';
import { uuid } from 'uuidv4';
import { RecipeDocument } from './schemas/recipe.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Recipe } from './models/recipes.model';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
  ) {}

  async create(recipe: {
    title: string;
    description: string;
    ingredients: string[];
  }): Promise<Recipe> {
    const newRecipe = new this.recipeModel({ ...recipe, id: uuid() });
    return newRecipe.save();
  }

  async findOneById(id: string): Promise<Recipe> {
    return this.recipeModel.findById(id).exec();
  }

  // async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
  //   return [] as Recipe[];
  // }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

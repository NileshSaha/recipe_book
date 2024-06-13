import { Recipe } from "./models/recipes.model";
import {uuid} from "uuidv4"

export class RecipeService {
  async create(recipe: {title: string, description: string, ingredients: string[]}): Promise<Recipe> {
    console.log('Line no => 6', recipe)
    return {
      id: uuid(),
      title: "title1",
      description: "description1",
      creationDate: new Date("2024-06-23"),
      ingredients: ["ingredients1"]
    };
  }
  async findOneById(id: string): Promise<Recipe> {
    return {
      id: uuid(),
      title: "title12",
      description: "description1344",
      creationDate: new Date("2024-06-23"),
      ingredients: ["ingredients1"]
    };
  }

  // async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
  //   return [] as Recipe[];
  // }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
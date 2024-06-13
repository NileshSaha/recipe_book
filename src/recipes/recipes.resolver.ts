import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { Recipe } from "./models/recipes.model";
import { NotFoundException, NotImplementedException } from "@nestjs/common";
import { RecipeService } from "./recipes.service";
import { RecipeInput } from "./dto/recipe.dto";

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Query(returns => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    const recipe = await this.recipeService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return recipe;
  }

  @Mutation(returns => Recipe)
  async addRecipe(@Args('newRecipe') newRecipe: RecipeInput): Promise<Recipe> {
    const recipe = await this.recipeService.create(newRecipe);
    if (!recipe) {
      throw new NotImplementedException('Reciepe is not implemented');
    }
    return recipe;
  }
}
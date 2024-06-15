import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Recipe } from './models/recipes.model';
import { NotFoundException, NotImplementedException } from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { RecipeInput } from './dto/recipe.dto';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Query((returns) => Recipe)
  async recipe(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Recipe> {
    return this.recipeService.findOneById(id);
  }

  @Mutation((returns) => Recipe)
  async addRecipe(@Args('newRecipe') newRecipe: RecipeInput): Promise<Recipe> {
    const recipe = await this.recipeService.create(newRecipe);
    return recipe;
  }
}

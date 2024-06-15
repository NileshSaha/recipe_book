import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Recipe } from './models/recipes.model';
import { NotFoundException, NotImplementedException } from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { RecipeInput } from './dto/recipe.dto';
import { Recipe as RecipeInterface } from './interfaces/recipe.interface';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Query((returns) => Recipe)
  async recipe(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Recipe> {
    const recipe = await this.recipeService.findOneById(id);
    return this.toGraphQl(recipe);
  }

  @Query((returns) => [Recipe])
  async recipes (@Args('title', { nullable: true, type: () => String}) title ?: string): Promise<Recipe[]> {
    const recipes = await this.recipeService.findAll(title);
    return recipes.map((recipe) => this.toGraphQl(recipe));
  }

  @Mutation((returns) => Recipe)
  async addRecipe(@Args('newRecipe') newRecipe: RecipeInput): Promise<Recipe> {
    const recipe = await this.recipeService.create(newRecipe);
    return this.toGraphQl(recipe);
  }

  private toGraphQl(recipe: RecipeInterface): Recipe {
    return {
      id: recipe._id,
      title: recipe.title,
      description: recipe.description,
      creationDate: recipe.creationDate,
      ingredients: recipe.ingredients,
    };
  }
}

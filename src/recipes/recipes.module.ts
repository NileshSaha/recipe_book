import { Module } from '@nestjs/common';
import { RecipesResolver } from './recipes.resolver';
import { RecipeService } from './recipes.service';
import { Recipe, RecipeSchema } from './schemas/recipe.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
  ],
  providers: [RecipesResolver, RecipeService],
})
export class RecipesModule {}

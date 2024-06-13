import {Module} from '@nestjs/common'
import { RecipesResolver } from './recipes.resolver';
import { RecipeService } from './recipes.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [RecipesResolver, RecipeService]
})

export class RecipesModule {}
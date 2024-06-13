import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';
import { GraphQLDirective, DirectiveLocation } from 'graphql';

@Module({
  imports: [
    RecipesModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'src/schema.gql',
      driver: ApolloDriver,
      playground: true,
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

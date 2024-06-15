import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe' })
export class Recipe {
  @Field((type) => ID)
  id: string;

  @Directive('@upper')
  @Field((type) => String)
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  creationDate: Date;

  @Field((type) => [String])
  ingredients: string[];
}

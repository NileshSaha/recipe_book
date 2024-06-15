import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'users'})
export class User {
  @Field((type) => ID)
  id: string;

  @Directive('@upper')
  @Field((type) => String)
  firstName: string;

  @Field((type) => String)
  lastName: string;

  @Field((type) => String)
  fullName: string;

  @Field((type) => String)
  email: string;

  @Field((type) => String)
  phone: string;
}
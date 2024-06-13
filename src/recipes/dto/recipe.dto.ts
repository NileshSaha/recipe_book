import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";

@InputType()
export class RecipeInput {
  @Field(type=>String)
  @MaxLength(25)
  title: string;

  @Field({nullable: true})
  @IsOptional()
  @Length(1, 350)
  description: string;

  @Field(type => [String])
  ingredients: string[];
}
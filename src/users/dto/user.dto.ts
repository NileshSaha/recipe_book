import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, MaxLength } from "class-validator";

@InputType()
export class UserInput {
  @Field(type => String)
  @MaxLength(25)
  firstName: string;

  @Field(type => String)
  @MaxLength(25)
  lastName: string;

  @Field(type => String)
  @MaxLength(25)
  email: string;

  @Field({ nullable: true})
  @IsOptional()
  @MaxLength(10)
  phone: string;

  @Field(type => String)
  @MaxLength(25)
  password: string;
}
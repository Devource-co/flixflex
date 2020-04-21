import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class SigninResultDto {
  @Field()
  token: string;
}

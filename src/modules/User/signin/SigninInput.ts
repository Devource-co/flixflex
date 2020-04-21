import { InputType, Field } from 'type-graphql';
import { Length, IsEmail, IsNotEmpty } from 'class-validator';
import { IsUserAlreadyExist } from './UserExist';

@InputType()
export class SigninInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  @IsUserAlreadyExist({
    message: 'The email you provided does not exist'
  })
  email: string;

  @Field()
  @IsNotEmpty()
  @Length(8, 255)
  password: string;
}

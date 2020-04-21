import { Resolver, Arg, Mutation } from 'type-graphql';
import { SigninInput } from './SigninInput';
import { registerService } from './Signin.service';
import { SigninResultDto } from './signin.dto';

@Resolver()
export class SigninResolver {
  @Mutation(() => SigninResultDto)
  async signin(@Arg('data') { email, password }: SigninInput): Promise<any> {
    return registerService(email, password);
  }
}

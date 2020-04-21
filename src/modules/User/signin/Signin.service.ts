import { signToken } from '../../../utils/jwtAuth';
import { User } from '../../../models/User';

const registerService = async (
  email: string | null,
  password: string
): Promise<any> => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    throw new Error('Email and password does not match');
  }
  const { createdAt, updatedAt, password: p, ...tokenData } = user;
  return { token: signToken(tokenData) };
};

export { registerService };

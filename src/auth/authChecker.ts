import { AuthChecker } from 'type-graphql';
import { Context } from '../types/Context';

export const authChecker: AuthChecker<Context> = (
  { context: { req } },
  roles
) => {
  if (roles.length === 0) {
    // if `@Authorized()`, check only is user exist
    return !!req.session.userId;
  }
  // there are some roles defined now

  if (!req.session.userId) {
    return false;
  }

  //   if (user.roles.some((role) => roles.includes(role))) {
  //     // grant access if the roles overlap
  //     return true;
  //   }

  // no roles matched, restrict access
  return false;
};
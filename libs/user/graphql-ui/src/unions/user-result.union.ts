import { UserObject } from '@lib/user/graphql-ui/objects/user.object';
import { UserNotFoundObject } from '@lib/user/graphql-ui/objects/user-not-found.object';
import { createUnionType } from '@nestjs/graphql';

export const UserResult = createUnionType({
  name: 'UserResult',
  types: () => [UserNotFoundObject, UserObject],
  resolveType(value) {
    if ('errorMessage' in value) {
      return UserNotFoundObject;
    }
    return UserObject;
  },
});

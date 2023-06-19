import { BaseRepositoryPort } from '@lib/shared';
import { User, UserProps } from '@lib/user/domain';

export abstract class UserRepository extends BaseRepositoryPort<
  User,
  UserProps
> {}

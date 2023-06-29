import { BaseRepositoryPort } from '@lib/shared/ddd/domain';

import { User, UserProps } from '../aggregates';

export abstract class UserRepository extends BaseRepositoryPort<
  User,
  UserProps
> {}

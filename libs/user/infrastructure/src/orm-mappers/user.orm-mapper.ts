import { Email } from '@lib/shared/ddd/domain';
import { BaseOrmMapper } from '@lib/shared/ddd/infrastructure';
import { User, UserProps } from '@lib/user/domain/aggregates';
import { Password, Username } from '@lib/user/domain/value-objects';
import { Injectable } from '@nestjs/common';

import { UserOrmEntity } from '../orm-entities';

@Injectable()
export class UserOrmMapper extends BaseOrmMapper<
  User,
  UserProps,
  UserOrmEntity
> {
  constructor() {
    super(User);
  }

  protected toEntityProps(ormEntity: UserOrmEntity): UserProps {
    return {
      email: new Email(ormEntity.email),
      name: new Username(ormEntity.name),
      password: new Password(ormEntity.password),
    };
  }

  protected toOrmProps(entity: User) {
    return {
      email: entity.email.unpack(),
      name: entity.name.unpack(),
      password: entity.password.unpack(),
    };
  }
}

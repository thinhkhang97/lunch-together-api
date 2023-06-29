import { BaseOrmMapper, Email } from '@lib/shared';
import { User, Username, UserProps } from '@lib/user/domain';
import { Password } from '@lib/user/domain/value-objects/password';
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
      name: ormEntity.name ? new Username(ormEntity.name) : null,
      password: new Password(ormEntity.password),
    };
  }

  protected toOrmProps(entity: User) {
    return {
      email: entity.email.unpack(),
      name: entity.name ? entity.name.unpack() : null,
      password: entity.password.unpack(),
    };
  }
}

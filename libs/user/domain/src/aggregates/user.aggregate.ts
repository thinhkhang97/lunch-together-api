import { BaseEntity, Email } from '@lib/shared';
import { Username } from '@lib/user/domain/value-objects';
import { Password } from '@lib/user/domain/value-objects/password';

interface CreateUserProps {
  email: Email;
  name: Username;
  password: Password;
}

type UserProps = CreateUserProps;

export class User extends BaseEntity<UserProps> {
  get email() {
    return this._props.email;
  }
}

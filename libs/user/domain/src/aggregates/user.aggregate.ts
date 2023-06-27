import { AggregateRoot, Email } from '@lib/shared';
import { Username } from '@lib/user/domain/value-objects';
import { Password } from '@lib/user/domain/value-objects/password';

interface CreateUserProps {
  email: Email;
  name: Username;
  password: Password;
}

export type UserProps = CreateUserProps;

export class User extends AggregateRoot<UserProps> {
  get email() {
    return this._props.email;
  }

  get name() {
    return this._props.name;
  }

  get password() {
    return this._props.password;
  }

  valiate() {
    return;
  }
}

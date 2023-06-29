import { Nullable } from '@lib/shared';
import { BaseEntity, Email } from '@lib/shared/ddd/domain';

import { Password, Username } from '../value-objects';

export type UserProps = {
  name: Nullable<Username>;
  email: Email;
  password: Password;
};

export class User extends BaseEntity<UserProps> {
  get email() {
    return this._props.email;
  }

  get name() {
    return this._props.name;
  }

  get password() {
    return this._props.password;
  }

  public static create(email: Email, password: Password) {
    return new User({ email, password, name: null });
  }

  valiate() {
    return;
  }
}

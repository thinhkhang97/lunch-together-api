import { Bcrypt, ValueObject, ValueObjectProps } from '@lib/shared';
import {
  InvalidPasswordFormatException,
  LoginInfoNotCorrectException,
} from '@lib/user/domain/exceptions';

export class Password extends ValueObject<string> {
  private static readonly MIN_LENGTH = 6;

  constructor(value: string) {
    super({ value });
  }

  public static async create(value: string) {
    const hashedPassword = await Bcrypt.hash(value);
    return new Password(hashedPassword);
  }

  public async compareWith(password: Password) {
    const isTheSame = await Bcrypt.compare(password.unpack(), this.value);
    if (!isTheSame) {
      throw new LoginInfoNotCorrectException();
    }
  }

  protected validate(props: ValueObjectProps<string>): void {
    if (props.value.length < Password.MIN_LENGTH) {
      throw new InvalidPasswordFormatException();
    }
  }
}

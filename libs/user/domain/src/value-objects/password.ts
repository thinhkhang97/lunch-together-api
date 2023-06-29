import { Bcrypt, ValueObject, ValueObjectProps } from '@lib/shared';
import { InvalidUsernameFormatException } from '@lib/user/domain/exceptions';

export class Password extends ValueObject<string> {
  private static readonly MIN_LENGTH = 6;

  constructor(value: string) {
    super({ value });
  }

  public static async create(value: string) {
    const hashedPassword = await Bcrypt.hash(value);
    return new Password(hashedPassword);
  }

  protected validate(props: ValueObjectProps<string>): void {
    if (props.value.length < Password.MIN_LENGTH) {
      throw new InvalidUsernameFormatException();
    }
  }
}

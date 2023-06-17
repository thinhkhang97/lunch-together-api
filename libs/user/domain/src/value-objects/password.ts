import { ValueObject, ValueObjectProps } from '@lib/shared';
import { InvalidUsernameFormatException } from '@lib/user/domain/exceptions';

export class Password extends ValueObject<string> {
  private static readonly MIN_LENGTH = 6;

  protected validate(props: ValueObjectProps<string>): void {
    if (props.value.length < Password.MIN_LENGTH) {
      throw new InvalidUsernameFormatException();
    }
  }
}

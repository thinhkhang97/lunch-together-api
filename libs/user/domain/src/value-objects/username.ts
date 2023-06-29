import { ValueObject, ValueObjectProps } from '@lib/shared/ddd/domain';

import { InvalidUsernameFormatException } from '../exceptions';

export class Username extends ValueObject<string> {
  private static readonly MIN_LENGTH = 3;

  constructor(value: string) {
    super({ value });
  }

  protected validate(props: ValueObjectProps<string>): void {
    if (props.value.length < Username.MIN_LENGTH) {
      throw new InvalidUsernameFormatException();
    }
  }
}

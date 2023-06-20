import { InvalidValueFormatException } from '@lib/shared';

import { ValueObject, ValueObjectProps } from './value-object';

export class Email extends ValueObject<string> {
  private static readonly EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(value: string) {
    super({ value });
  }

  protected validate(props: ValueObjectProps<string>): void {
    if (!Email.EMAIL_PATTERN.test(props.value)) {
      throw new InvalidValueFormatException('Invalid email format');
    }
  }
}

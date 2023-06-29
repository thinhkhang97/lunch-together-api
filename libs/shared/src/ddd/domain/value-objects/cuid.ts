import { ValueObjectProps } from '@lib/shared/ddd';
import { InvalidValueFormatException } from '@lib/shared/exceptions';
import { createId, isCuid } from '@paralleldrive/cuid2';

import { ID } from './id';

export class CUID extends ID {
  public static generate() {
    return new CUID(createId());
  }

  protected validate(props: ValueObjectProps<string>): void {
    if (!isCuid(props.value)) {
      throw new InvalidValueFormatException('Invalid CUID format');
    }
  }
}

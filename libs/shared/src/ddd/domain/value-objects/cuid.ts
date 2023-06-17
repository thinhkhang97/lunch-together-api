import { ValueObjectProps } from '@lib/shared/ddd';
import { InvalidValueFormatException } from '@lib/shared/exceptions';
import cuid from 'cuid';

import { ID } from './id';

export class CUID extends ID {
  public static generate() {
    return new CUID(cuid());
  }

  protected validate(props: ValueObjectProps<string>): void {
    if (!cuid.isCuid(props.value)) {
      throw new InvalidValueFormatException('Invalid CUID format');
    }
  }
}

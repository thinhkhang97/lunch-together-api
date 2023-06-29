import cuid from 'cuid';

import { InvalidValueFormatException } from '../../../exceptions';
import { ValueObjectProps } from '../value-objects';
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

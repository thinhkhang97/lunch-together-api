import { ValueObject } from '@lib/shared';

export class DateVO extends ValueObject<Date> {
  protected validate(): void {
    return;
  }
}

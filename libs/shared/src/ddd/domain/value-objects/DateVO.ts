import { ValueObject } from '@lib/shared';

export class DateVO extends ValueObject<Date> {
  constructor(date: Date) {
    super({ value: date });
  }

  public static now() {
    return new DateVO(new Date());
  }

  protected validate(): void {
    return;
  }
}

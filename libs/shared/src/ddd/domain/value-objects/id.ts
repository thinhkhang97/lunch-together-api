import { ValueObject } from '@lib/shared/ddd';

export abstract class ID extends ValueObject<string> {
  constructor(id: string) {
    super({ value: id });
  }
}

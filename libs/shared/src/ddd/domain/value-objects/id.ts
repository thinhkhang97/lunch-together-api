import { ValueObject } from './value-object';

export abstract class ID extends ValueObject<string> {
  constructor(id: string) {
    super({ value: id });
  }
}

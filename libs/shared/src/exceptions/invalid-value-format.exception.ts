import { BaseException } from './base.exception';

export class InvalidValueFormatException extends BaseException {
  constructor(message?: string) {
    super(message);
  }
}

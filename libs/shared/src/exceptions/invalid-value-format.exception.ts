import { BaseException } from '@lib/shared/exceptions/base.exception';

export class InvalidValueFormatException extends BaseException {
  constructor(message?: string) {
    super(message);
  }
}

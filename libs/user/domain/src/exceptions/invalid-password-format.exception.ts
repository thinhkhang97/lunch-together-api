import { BaseException } from '@lib/shared/exceptions/base.exception';

export class InvalidPasswordFormatException extends BaseException {
  constructor() {
    super('invalid_password_format');
  }
}

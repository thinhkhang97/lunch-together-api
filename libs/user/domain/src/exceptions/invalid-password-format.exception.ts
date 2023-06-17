import { BaseException } from '@lib/shared';

export class InvalidPasswordFormatException extends BaseException {
  constructor() {
    super('invalid_password_format');
  }
}

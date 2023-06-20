import { BaseException } from '@lib/shared/exceptions/base.exception';

export class InvalidUsernameFormatException extends BaseException {
  constructor() {
    super('invalid_username_format');
  }
}

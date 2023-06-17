import { BaseException } from '@lib/shared';

export class InvalidUsernameFormatException extends BaseException {
  constructor() {
    super('invalid_username_format');
  }
}

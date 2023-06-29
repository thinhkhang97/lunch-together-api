import { BaseException } from '@lib/shared/exceptions/base.exception';

export class UserNotFoundException extends BaseException {
  constructor() {
    super('user_not_found');
  }
}

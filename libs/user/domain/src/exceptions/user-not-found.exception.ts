import { BaseException } from '@lib/shared';

export class UserNotFoundException extends BaseException {
  constructor() {
    super('user_not_found_exception');
  }
}

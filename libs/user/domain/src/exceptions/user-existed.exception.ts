import { BaseException } from '@lib/shared/exceptions/base.exception';

export class UserExistedException extends BaseException {
  constructor() {
    super('user_existed');
  }
}

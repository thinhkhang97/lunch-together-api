import { BaseException } from '@lib/shared/exceptions/base.exception';

export class UserExistException extends BaseException {
  constructor() {
    super('user_exist');
  }
}

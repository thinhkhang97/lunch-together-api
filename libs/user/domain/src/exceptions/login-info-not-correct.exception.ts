import { BaseException } from '@lib/shared/exceptions/base.exception';

export class LoginInfoNotCorrectException extends BaseException {
  constructor() {
    super('login_info_not_correct');
  }
}

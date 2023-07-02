import { BaseException } from '@lib/shared/exceptions/base.exception';

export class LoginInfoIsNotCorrectException extends BaseException {
  constructor() {
    super('login_info_is_not_correct');
  }
}

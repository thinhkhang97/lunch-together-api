import { BaseException } from './base.exception';

export class InternalServerException extends BaseException {
  constructor(message: string) {
    super('internal_server_exception' + message);
  }
}

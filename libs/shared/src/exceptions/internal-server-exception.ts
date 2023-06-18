import { BaseException } from '@lib/shared';

export class InternalServerException extends BaseException {
  constructor(message: string) {
    super('internal_server_exception' + message);
  }
}

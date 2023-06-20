export class InternalServerException extends Error {
  constructor(message: string) {
    super('internal_server_exception' + message);
  }
}

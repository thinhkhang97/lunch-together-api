export abstract class BaseException extends Error {
  constructor(message: string, public readonly metadata?: unknown) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

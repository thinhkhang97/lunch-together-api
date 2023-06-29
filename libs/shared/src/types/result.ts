import { BaseException } from '@lib/shared';
import { Result } from 'oxide.ts';

export { Err, Ok, Result } from 'oxide.ts';

export type Either<T = unknown> = Result<T, BaseException>;

export type Nullable<T> = null | T;

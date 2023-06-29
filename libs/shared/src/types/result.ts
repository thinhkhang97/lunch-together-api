import { Result } from 'oxide.ts';

import { BaseException } from '../exceptions';

export { Err, Ok, Result } from 'oxide.ts';

export type Either<T = unknown> = Result<T, BaseException>;

export type Nullable<T> = null | T;

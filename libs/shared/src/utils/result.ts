import { BaseException } from '@lib/shared/exceptions';
import { Result } from 'oxide.ts';

export * from 'oxide.ts';

export type Either<T = unknown> = Result<T, BaseException>;

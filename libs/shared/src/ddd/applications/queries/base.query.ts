import { IQuery } from '@nestjs/cqrs';

export type QueryProps<Q extends BaseQuery> = Partial<Q>;

export abstract class BaseQuery implements IQuery {}

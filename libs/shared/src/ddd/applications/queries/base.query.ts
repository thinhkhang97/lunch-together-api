import { IQuery } from '@nestjs/cqrs';

export type QueryProps<Q extends BaseQuery> = Q;

export abstract class BaseQuery implements IQuery {}

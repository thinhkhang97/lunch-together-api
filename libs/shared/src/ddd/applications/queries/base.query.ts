import { IQuery } from '@nestjs/cqrs';

export type QueryProps = Partial<BaseQuery>;

export abstract class BaseQuery implements IQuery {}

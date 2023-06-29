import { BaseEntity } from '../entities/base.entity';

export abstract class AggregateRoot<T> extends BaseEntity<T> {}

import { BaseException } from '@lib/shared/exceptions';

import { DeepPartial } from '../../../types';
import { BaseEntity, BaseEntityProps } from '../entities/base.entity';
import { ID } from '../value-objects';

export type QueryParams<EntityProps> = DeepPartial<
  EntityProps & BaseEntityProps
>;

export abstract class BaseRepositoryPort<
  Entity extends BaseEntity<unknown>,
  EntityProps,
> {
  public abstract save(entity: Entity): Promise<Entity>;

  public abstract findOneByIdOrThrow(
    id: ID | string,
    exception: BaseException,
  ): Promise<Entity>;

  public abstract findOne(props: QueryParams<EntityProps>): Promise<Entity>;

  public abstract findOneOrThrow(
    props: QueryParams<EntityProps>,
    exception?: BaseException,
  ): Promise<Entity>;

  public abstract findMany(
    props: QueryParams<EntityProps>,
  ): Promise<Array<Entity>>;
}

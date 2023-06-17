import {
  BaseEntity,
  BaseEntityProps,
  BaseException,
  DeepPartial,
  ID,
} from '@lib/shared';

type QueryParams<EntityProps> = DeepPartial<EntityProps & BaseEntityProps>;

export abstract class BaseRepository<
  Entity extends BaseEntity<unknown>,
  EntityProps,
> {
  public abstract save(entity: Entity): Promise<Entity>;

  public abstract findOneByIdOrThrow(
    id: ID | string,
    exception: BaseException,
  ): Promise<Entity>;

  public abstract findOne(props: QueryParams<EntityProps>): Promise<Entity>;
}

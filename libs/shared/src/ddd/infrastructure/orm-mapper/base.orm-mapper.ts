import { BaseEntity, BaseOrmEntity, ID } from '@lib/shared';

export abstract class BaseOrmMapper<
  Entity extends BaseEntity<unknown>,
  EntityProps,
  OrmEntity extends BaseOrmEntity,
> {
  entityContructor: new (props: EntityProps, id?: string | ID) => Entity;

  public toEntity(ormEntity: OrmEntity): Entity {
    const props = {
      ...this.toEntityProps(ormEntity),
    };
    return new this.entityContructor(props, ormEntity.id);
  }

  public toOrm(entity: Entity): OrmEntity {
    return {
      ...(this.toBaseOrmProps(entity) as OrmEntity),
      ...this.toOrmProps(entity),
    };
  }

  protected abstract toEntityProps(ormEntity: OrmEntity): EntityProps;

  protected abstract toOrmProps(
    entity: Entity,
  ): Omit<OrmEntity, keyof BaseOrmEntity>;

  private toBaseOrmProps(entity: Entity): BaseOrmEntity {
    return {
      id: entity.id.unpack(),
      updatedAt: entity.updatedAt.unpack(),
      createdAt: entity.createdAt.unpack(),
      version: entity.version,
    };
  }
}

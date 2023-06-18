import {
  BaseEntity,
  BaseEntityProps,
  BaseOrmEntity,
  CreateEntityProps,
  DateVO,
  ID,
} from '@lib/shared';

export abstract class BaseOrmMapper<
  Entity extends BaseEntity<unknown>,
  OrmEntity extends BaseOrmEntity,
> {
  entityContructor: new (props: CreateEntityProps, id?: string | ID) => Entity;

  public toEntity(ormEntity: OrmEntity): Entity {
    const props = {
      ...this.toBaseEntityProps(ormEntity),
      ...this.toEntityProps(ormEntity),
    };
    return new this.entityContructor(props, ormEntity.id);
  }

  public toOrm(entity: Entity): OrmEntity {
    return {
      ...this.toOrmProps(entity),
      ...this.toBaseOrmProps(entity),
    };
  }

  toBaseEntityProps(ormEntity: OrmEntity): BaseEntityProps {
    return {
      updatedAt: new DateVO(ormEntity.updatedAt),
      createdAt: new DateVO(ormEntity.createdAt),
      version: ormEntity.version,
    };
  }

  protected abstract toEntityProps(ormEntity: OrmEntity): CreateEntityProps;

  protected abstract toOrmProps(entity: Entity): OrmEntity;

  private toBaseOrmProps(entity: Entity): BaseOrmEntity {
    return {
      id: entity.id.unpack(),
      updatedAt: entity.updatedAt.unpack(),
      createdAt: entity.createdAt.unpack(),
      version: entity.version,
    };
  }
}

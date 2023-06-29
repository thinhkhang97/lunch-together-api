import { BaseEntity, BaseEntityProps, CUID, DateVO, ID } from '../../domain';
import { BaseOrmEntity } from './base.orm-entity';

export abstract class BaseOrmMapper<
  Entity extends BaseEntity<unknown>,
  EntityProps,
  OrmEntity extends BaseOrmEntity,
> {
  constructor(
    private readonly entityConstructor: new (
      props: EntityProps,
      id?: string | ID,
    ) => Entity,
  ) {}

  public toEntity(ormEntity: OrmEntity): Entity {
    const props = {
      ...this.toEntityProps(ormEntity),
      ...this.toBaseEntityProps(ormEntity),
    };
    return new this.entityConstructor(props, new CUID(ormEntity.id));
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

  private toBaseEntityProps(ormEntity: OrmEntity): BaseEntityProps {
    return {
      id: new CUID(ormEntity.id),
      createdAt: new DateVO(ormEntity.createdAt),
      updatedAt: new DateVO(ormEntity.updatedAt),
      version: ormEntity.version,
    };
  }

  private toBaseOrmProps(entity: Entity): BaseOrmEntity {
    return {
      id: entity.id.unpack(),
      updatedAt: entity.updatedAt.unpack(),
      createdAt: entity.createdAt.unpack(),
      version: entity.version,
    };
  }
}

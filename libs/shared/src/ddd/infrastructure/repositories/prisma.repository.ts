import {
  BaseRepositoryPort,
  QueryParams,
} from '@lib/shared/ddd/domain/repositories';
import { BaseOrmEntity, BaseOrmMapper } from '@lib/shared/ddd/infrastructure';
import { PrismaDelegate } from '@lib/shared/ddd/infrastructure/types';
import { BaseException } from '@lib/shared/exceptions/base.exception';

import { BaseEntity, ID } from '../../domain';

export type WhereCondition = Record<any, any>;

export abstract class PrismaRepository<
  Entity extends BaseEntity<unknown>,
  EntityProps,
  OrmEntity extends BaseOrmEntity,
  Delegate extends PrismaDelegate,
> implements BaseRepositoryPort<Entity, EntityProps>
{
  constructor(
    private readonly _delegate: Delegate,
    private readonly _ormMapper: BaseOrmMapper<Entity, EntityProps, OrmEntity>,
  ) {}

  public abstract getWhereCondition(
    props: QueryParams<EntityProps>,
  ): WhereCondition;

  public async findMany(
    props: QueryParams<EntityProps>,
  ): Promise<Array<Entity>> {
    const result = (await this._delegate.findMany({
      where: this.getWhereCondition(props),
    })) as Array<OrmEntity>;
    return result.map((r) => this._ormMapper.toEntity(r));
  }

  public async findOne(props: QueryParams<EntityProps>): Promise<Entity> {
    const result = (await this._delegate.findUnique({
      where: this.getWhereCondition(props),
    })) as OrmEntity;
    return this._ormMapper.toEntity(result);
  }

  public async findOneOrThrow(
    props: QueryParams<EntityProps>,
    exception: BaseException,
  ): Promise<Entity> {
    const result = (await this._delegate.findFirst({
      where: this.getWhereCondition(props),
    })) as OrmEntity;
    if (!result) {
      throw exception;
    }
    return this._ormMapper.toEntity(result);
  }

  public async findOneByIdOrThrow(
    id: ID | string,
    exception: BaseException,
  ): Promise<Entity> {
    const _id = id instanceof ID ? id.unpack() : id;
    const result = (await this._delegate.findFirst({
      where: { id: _id },
    })) as OrmEntity;
    if (!result) {
      throw exception;
    }
    return this._ormMapper.toEntity(result);
  }

  public preSave(entity: Entity) {
    const ormProps = this._ormMapper.toOrm(entity);
    return {
      where: { id: entity.id },
      create: { ...ormProps },
      update: { ...ormProps, version: ormProps.version + 1 },
    };
  }

  public async save(entity: Entity): Promise<Entity> {
    entity.valiate();
    const ormEntity = (await this._delegate.create(
      this.preSave(entity),
    )) as OrmEntity;
    return this._ormMapper.toEntity(ormEntity);
  }
}

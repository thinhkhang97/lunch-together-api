import { CUID, DateVO, ID } from '@lib/shared';

export interface BaseEntityProps {
  updatedAt: DateVO;
  createdAt: DateVO;
  version: number;
}

export interface CreateEntityProps {
  updatedAt?: DateVO;
  createdAt?: DateVO;
  version?: number;
}

export abstract class BaseEntity<T> {
  protected readonly _id: ID;
  protected _props: T & BaseEntityProps;

  constructor(props: T & CreateEntityProps, id?: ID) {
    const now = DateVO.now();
    this._props = {
      ...props,
      version: props.version || 0,
      createdAt: props.createdAt || now,
      updatedAt: props.updatedAt || now,
    };
    this._id = id ? id : CUID.generate();
  }

  get id() {
    return this._id;
  }

  get updatedAt() {
    return this._props.updatedAt;
  }

  get createdAt() {
    return this._props.createdAt;
  }

  get version() {
    return this._props.version;
  }

  static isEntity(object: any): object is BaseEntity<any> {
    return object instanceof BaseEntity;
  }

  public abstract valiate();

  public equals(entity?: BaseEntity<T>) {
    if (entity === null || entity === undefined) {
      return false;
    }

    if (this === entity) {
      return true;
    }

    if (!BaseEntity.isEntity(entity)) {
      return false;
    }

    return this._id.equals(entity._id);
  }
}

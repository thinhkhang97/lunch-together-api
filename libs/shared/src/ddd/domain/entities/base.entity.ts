import { CUID, DateVO, ID } from '@lib/shared';

interface BaseEntityProps {
  updatedAt: DateVO;
  createdAt: DateVO;
  version: number;
}

export abstract class BaseEntity<T extends BaseEntityProps> {
  protected readonly _id: ID;
  protected _props: T;

  constructor(props: T, id?: ID) {
    this._props = props;
    this._id = id ? id : CUID.generate();
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

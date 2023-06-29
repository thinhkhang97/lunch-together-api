type SupportedType = string | number | boolean | Date;

export interface ValueObjectProps<T extends SupportedType> {
  value: T;
}

export abstract class ValueObject<T extends SupportedType> {
  protected readonly _props: ValueObjectProps<T>;

  constructor(props: ValueObjectProps<T>) {
    this.validate(props);
    this._props = props;
  }

  public get value() {
    return this._props.value;
  }

  public equals(vo?: ValueObject<T>) {
    if (vo === undefined || vo === null) {
      return false;
    }
    return JSON.stringify(this) === JSON.stringify(vo);
  }

  public unpack(): T {
    return this._props.value;
  }

  protected abstract validate(props: ValueObjectProps<T>): void;
}

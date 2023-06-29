import { BCrypt } from '@lib/shared';
import { ValueObject, ValueObjectProps } from '@lib/shared/ddd/domain';

export class Password extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
  }

  public static async create(value: string) {
    const hashedPassword = await BCrypt.hash(value);
    return new Password(hashedPassword);
  }

  public async compare(password: string | Buffer): Promise<boolean> {
    return BCrypt.compare(password, this.value);
  }

  protected validate(props: ValueObjectProps<string>): void {
    return;
  }
}

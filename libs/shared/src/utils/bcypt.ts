import { compare as _compare, hash } from 'bcrypt';

export class Bcrypt {
  public static async hash(
    data: string | Buffer,
    saltOrRounds: string | number = 10,
  ) {
    return await hash(data, saltOrRounds);
  }

  public static async compare(data: string | Buffer, encrypted: string) {
    return await _compare(data, encrypted);
  }
}

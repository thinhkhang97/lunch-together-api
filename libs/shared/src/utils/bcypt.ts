import { hash } from 'bcrypt';

export class Bcrypt {
  public static async hash(
    data: string | Buffer,
    saltOrRounds: string | number = 10,
  ) {
    return await hash(data, saltOrRounds);
  }
}

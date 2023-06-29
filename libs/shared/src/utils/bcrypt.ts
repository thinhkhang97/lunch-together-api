import bcrypt from 'bcrypt';

export class BCrypt {
  public static async hash(
    data: string | Buffer,
    saltOrRounds: string | number = 10,
  ): Promise<string> {
    return await bcrypt.hash(data, saltOrRounds);
  }

  public static async compare(
    data: string | Buffer,
    encrypted: string,
  ): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }
}

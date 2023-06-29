export interface BaseOrmEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

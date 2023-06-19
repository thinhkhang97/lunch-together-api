import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  public readonly _logger: Logger;

  constructor() {
    super();
    this._logger = new Logger(this.constructor.name);
  }

  public async onModuleInit() {
    await this.$connect();
  }
}

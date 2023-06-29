import { Module, Provider } from '@nestjs/common';

import { PrismaService } from '../services';

const services: Provider[] = [PrismaService];

@Module({
  providers: [...services],
  exports: [...services],
})
export class SharedModule {}

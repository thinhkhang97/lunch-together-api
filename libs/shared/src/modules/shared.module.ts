import { PrismaService } from '@lib/shared';
import { Module, Provider } from '@nestjs/common';

const services: Provider[] = [PrismaService];

@Module({
  providers: [...services],
  exports: [...services],
})
export class SharedModule {}

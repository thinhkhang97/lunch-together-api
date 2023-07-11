import { UserPrismaService } from '@lib/shared';
import { Module, Provider } from '@nestjs/common';

const services: Provider[] = [UserPrismaService];

@Module({
  providers: [...services],
  exports: [...services],
})
export class SharedModule {}

import { UserInfrastructureModule } from '@lib/user/infrastructure/modules/user-infrastructure.module';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { commands } from '../commands';
import { queries } from '../queries';

@Module({
  imports: [CqrsModule, UserInfrastructureModule],
  providers: [...queries, ...commands],
  exports: [...queries],
})
export class UserApplicationModule {}

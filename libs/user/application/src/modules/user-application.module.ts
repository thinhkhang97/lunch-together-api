import { queries } from '@lib/user/application/queries';
import { UserInfrastructureModule } from '@lib/user/infrastructure/modules/user-infrastructure.module';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule, UserInfrastructureModule],
  providers: [...queries],
  exports: [...queries],
})
export class UserApplicationModule {}

import { SharedModule } from '@lib/shared/modules/shared.module';
import { UserOrmMapper } from '@lib/user/infrastructure/orm-mappers';
import { Module, Provider } from '@nestjs/common';

import { repositories } from '../repositories';

const ormMappers: Provider[] = [UserOrmMapper];

@Module({
  imports: [SharedModule],
  providers: [...ormMappers, ...repositories],
  exports: [...repositories],
})
export class UserInfrastructureModule {}

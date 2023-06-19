import { Module } from '@nestjs/common';

import { repositories } from '../repositories';

@Module({
  providers: [...repositories],
  exports: [...repositories],
})
export class UserInfrastructureModule {}

import { queries } from '@lib/user/application/queries';
import { Module } from '@nestjs/common';

@Module({
  providers: [...queries],
  exports: [...queries],
})
export class UserApplicationModule {}

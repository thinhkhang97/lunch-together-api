import { UserApplicationModule } from '@lib/user/application';
import { Module } from '@nestjs/common';

import { CoreController } from './core.controller';
import { CoreService } from './core.service';

@Module({
  imports: [UserApplicationModule],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}

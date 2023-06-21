import { UserApplicationModule } from '@lib/user/application';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CoreController } from './core.controller';
import { CoreService } from './core.service';

@Module({
  imports: [CqrsModule, UserApplicationModule],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}

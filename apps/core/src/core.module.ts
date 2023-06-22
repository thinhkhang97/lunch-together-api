import { UserGraphqlUiModule } from '@lib/user/graphql-ui';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserGraphqlUiModule],
})
export class CoreModule {}

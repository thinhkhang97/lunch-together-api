import { UserApplicationModule } from '@lib/user/application';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';

import { mutations } from '../mutations';
import { queries } from '../queries';

@Module({
  imports: [
    CqrsModule,
    UserApplicationModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [...queries, ...mutations],
  exports: [...queries, ...mutations],
})
export class UserGraphqlUiModule {}

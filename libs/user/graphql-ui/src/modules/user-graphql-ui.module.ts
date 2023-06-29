import { UserApplicationModule } from '@lib/user/application';
import { ApolloDriver } from '@nestjs/apollo';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';

import { Register } from '../mutations';
import { UserQuery } from '../queries';

const queries: Provider[] = [UserQuery];
const mutations: Provider[] = [Register];

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

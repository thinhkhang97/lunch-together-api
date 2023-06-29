import { UserApplicationModule } from '@lib/user/application';
import { Register } from '@lib/user/graphql-ui/mutations';
import { UserQuery } from '@lib/user/graphql-ui/queries';
import { ApolloDriver } from '@nestjs/apollo';
import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';

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

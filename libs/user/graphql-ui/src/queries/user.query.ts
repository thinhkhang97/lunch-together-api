import { Either } from '@lib/shared';
import { GetUserQuery } from '@lib/user/application';
import { User } from '@lib/user/domain/aggregates';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { UserObject } from '../objects/user.object';

@Resolver()
export class UserQuery {
  constructor(public readonly _queryBus: QueryBus) {}

  @Query(() => String, { name: 'test' })
  public test() {
    return 'HELLO WORLD';
  }

  @Query(() => UserObject, { name: 'user' })
  public async getUserByIdQuery(
    @Args('userId', { type: () => String }) userId: string,
  ) {
    const result = await this._queryBus.execute<GetUserQuery, Either<User>>(
      new GetUserQuery({ userId }),
    );
    if (result.isErr()) {
      return {
        errorMessage: result.unwrapErr().message,
      };
    }

    return new UserObject(result.unwrap());
  }
}

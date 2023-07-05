import { Either, Public } from '@lib/shared';
import { LoginCommand } from '@lib/user/application/commands';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { LoggedInObject } from '../objects/logged-in.object';

@Resolver()
export class Login {
  constructor(private readonly _commandBus: CommandBus) {}

  @Public()
  @Mutation(() => LoggedInObject)
  public async login(
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    const result = await this._commandBus.execute<
      LoginCommand,
      Either<{
        accessToken: string;
      }>
    >(new LoginCommand({ email, password }));
    if (result.isErr()) {
      return new LoggedInObject({
        errorMessage: result.unwrapErr().message,
      });
    }
    return new LoggedInObject(result.unwrap());
  }
}

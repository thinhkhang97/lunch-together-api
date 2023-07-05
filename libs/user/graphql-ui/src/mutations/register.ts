import { Either, Public } from '@lib/shared';
import { RegisterCommand } from '@lib/user/application/commands';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { RegisterResultObject } from '../objects/register-result.object';

@Resolver()
export class Register {
  constructor(private readonly _commandBus: CommandBus) {}

  @Public()
  @Mutation(() => RegisterResultObject, { name: 'register' })
  public async registerUser(
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    const result = await this._commandBus.execute<
      RegisterCommand,
      Either<void>
    >(new RegisterCommand({ email, password }));
    if (result.isErr()) {
      return new RegisterResultObject({
        errorMessage: result.unwrapErr().message,
        status: 'failed',
      });
    }
    return new RegisterResultObject({
      status: 'success',
    });
  }
}

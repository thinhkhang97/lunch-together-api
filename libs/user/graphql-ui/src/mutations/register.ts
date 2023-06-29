import { RegisterCommand } from '@lib/user/application';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class Register {
  constructor(private readonly _commandBus: CommandBus) {}

  @Mutation(() => String, { name: 'register' })
  public async registerUser(
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    const result = await this._commandBus.execute<RegisterCommand>(
      new RegisterCommand({ email, password }),
    );

    if (result.isErr()) {
      return 'FAILED WITH ERROR: ' + result.unwrapErr().message;
    }

    return 'SUCCESS';
  }
}

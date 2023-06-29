import { BaseCommandHandler } from '@lib/shared/ddd/applications';
import { Email } from '@lib/shared/ddd/domain/value-objects';
import { User } from '@lib/user/domain/aggregates';
import { UserExistedException } from '@lib/user/domain/exceptions';
import { UserRepository } from '@lib/user/domain/repositories';
import { Password } from '@lib/user/domain/value-objects/password';
import { CommandHandler } from '@nestjs/cqrs';

import { RegisterCommand } from './register.command';

@CommandHandler(RegisterCommand)
export class RegisterCommandHandler extends BaseCommandHandler<
  RegisterCommand,
  void
> {
  constructor(private readonly _userRepository: UserRepository) {
    super();
  }

  async handle(command: RegisterCommand): Promise<void> {
    const email = new Email(command.email);
    const user = await this._userRepository.findOne({ email });

    if (user) {
      throw new UserExistedException();
    }

    const password = await Password.create(command.password);
    const newUser = User.create(email, password);
    await this._userRepository.save(newUser);
  }
}

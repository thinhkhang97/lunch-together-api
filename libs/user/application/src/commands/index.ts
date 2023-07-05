import { LoginCommandHandler } from '@lib/user/application/commands/login/login.command-handler';
import { RegisterCommandHandler } from '@lib/user/application/commands/register/register.command-handler';
import { Provider } from '@nestjs/common';

export * from './login/login.command';
export * from './register/register.command';

export const commands: Provider[] = [
  RegisterCommandHandler,
  LoginCommandHandler,
];

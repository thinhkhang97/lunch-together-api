import { RegisterCommandHandler } from '@lib/user/application/commands/register/register.command-handler';
import { Provider } from '@nestjs/common';

export * from './register/register.command';
export const commands: Provider[] = [RegisterCommandHandler];

import { ICommand } from '@nestjs/cqrs';

export type CommandProps<C extends BaseCommand> = Partial<C>;

export abstract class BaseCommand implements ICommand {}

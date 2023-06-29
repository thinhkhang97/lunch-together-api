import { BaseException, InternalServerException } from '@lib/shared/exceptions';
import { ICommandHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';

import { BaseCommand } from './base.command';

export abstract class BaseCommandHandler<C extends BaseCommand, R>
  implements ICommandHandler
{
  async execute(command: C): Promise<Result<R, BaseException>> {
    try {
      const response = await this.handle(command);

      return Ok(response);
    } catch (error) {
      if (error instanceof BaseException) {
        return Err(error);
      }

      const errorMessage = error instanceof Error ? error.message : undefined;
      return Err(new InternalServerException(errorMessage));
    }
  }

  abstract handle(command: C): Promise<R>;
}

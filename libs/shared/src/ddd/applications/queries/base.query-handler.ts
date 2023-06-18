import { BaseException, BaseQuery, InternalServerException } from '@lib/shared';
import { IQueryHandler } from '@nestjs/cqrs';
import { Err, Ok, Result } from 'oxide.ts';

export abstract class BaseQueryHandler<Query extends BaseQuery, Response>
  implements IQueryHandler
{
  async execute(query: Query): Promise<Result<Response, BaseException>> {
    try {
      const response = await this.handle(query);

      return Ok(response);
    } catch (error) {
      if (error instanceof BaseException) {
        return Err(error);
      }

      const errorMessage = error instanceof Error ? error.message : undefined;
      return Err(new InternalServerException(errorMessage));
    }
  }

  protected abstract handle(query: Query): Promise<Response>;
}

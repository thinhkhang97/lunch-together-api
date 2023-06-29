import { Result } from '@lib/shared';
import { BaseQuery } from '@lib/shared/ddd/applications';
import { BaseException, InternalServerException } from '@lib/shared/exceptions';
import { IQueryHandler } from '@nestjs/cqrs';
import { Err, Ok } from 'oxide.ts';

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

import { Either } from '@lib/shared';
import { GetUserQuery } from '@lib/user/application/queries';
import { User } from '@lib/user/domain';
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

@Injectable()
export class CoreService {
  constructor(private readonly _queryBus: QueryBus) {}

  async getHello(): Promise<any> {
    const result = await this._queryBus.execute<GetUserQuery, Either<User>>(
      new GetUserQuery({ userId: 'clj187cva00003b6kjecglfir' }),
    );
    if (result.isErr()) {
      return {
        errorMessage: result.unwrapErr().message,
      };
    }

    return result.unwrap().getProps();
  }
}

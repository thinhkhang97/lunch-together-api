import { BaseQueryHandler } from '@lib/shared/ddd/applications';
import { CUID } from '@lib/shared/ddd/domain';
import { User } from '@lib/user/domain/aggregates';
import { UserNotFoundException } from '@lib/user/domain/exceptions';
import { UserRepository } from '@lib/user/domain/repositories';
import { QueryHandler } from '@nestjs/cqrs';

import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler extends BaseQueryHandler<GetUserQuery, User> {
  constructor(private readonly _userRepository: UserRepository) {
    super();
  }

  protected async handle(query: GetUserQuery): Promise<User> {
    const user = await this._userRepository.findOne({
      id: new CUID(query.userId),
    });

    if (!user) {
      throw new UserNotFoundException();
    }

    return user;
  }
}

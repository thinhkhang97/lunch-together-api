import { BaseQueryHandler, CUID } from '@lib/shared';
import { GetUserQuery } from '@lib/user/application/queries/get-user/get-user.query';
import { User, UserNotFoundException, UserRepository } from '@lib/user/domain';
import { QueryHandler } from '@nestjs/cqrs';

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

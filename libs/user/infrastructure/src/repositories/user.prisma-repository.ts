import { QueryParams } from '@lib/shared/ddd/domain';
import { PrismaRepository } from '@lib/shared/ddd/infrastructure';
import { PrismaService } from '@lib/shared/services';
import { User, UserProps } from '@lib/user/domain/aggregates';
import { UserOrmMapper } from '@lib/user/infrastructure/orm-mappers';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { UserOrmEntity } from '../orm-entities';

@Injectable()
export class UserPrismaRepository extends PrismaRepository<
  User,
  UserProps,
  UserOrmEntity,
  Prisma.UserDelegate<unknown>
> {
  constructor(
    private readonly _prismaService: PrismaService,
    _ormMapper: UserOrmMapper,
  ) {
    super(_prismaService.user, _ormMapper);
  }

  getWhereCondition(props: QueryParams<UserProps>): Prisma.UserWhereInput {
    const whereCondition: Prisma.UserWhereInput = {};
    if (props.id) {
      whereCondition.id = props.id.value;
    }

    if (props.email) {
      whereCondition.email = props.email.value;
    }

    return whereCondition;
  }
}

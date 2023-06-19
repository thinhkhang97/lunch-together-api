import {
  BaseOrmMapper,
  PrismaRepository,
  PrismaService,
  QueryParams,
} from '@lib/shared';
import { User, UserProps } from '@lib/user/domain';
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
    _ormMapper: BaseOrmMapper<User, UserProps, UserOrmEntity>,
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

import { BaseErrorObject } from '@lib/shared';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('UserNotFound')
export class UserNotFoundObject extends BaseErrorObject {}

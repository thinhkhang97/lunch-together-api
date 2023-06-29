import { User } from '@lib/user/domain/aggregates';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserObject {
  @Field(() => String)
  public readonly id: string;

  @Field(() => String)
  public readonly name: string;

  @Field(() => String)
  public readonly email: string;

  constructor(userEntity: User) {
    const props = userEntity.getProps();
    this.id = props.id.unpack();
    this.name = props.name.unpack();
    this.email = props.email.unpack();
  }
}

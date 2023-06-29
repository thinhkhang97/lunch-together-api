import { Nullable } from '@lib/shared';
import { User } from '@lib/user/domain';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserObject {
  @Field(() => ID)
  public readonly id: string;

  @Field(() => String, { nullable: true })
  public readonly name: Nullable<string>;

  @Field(() => String)
  public readonly email: string;

  constructor(userEntity: User) {
    const props = userEntity.getProps();
    this.id = props.id.unpack();
    this.name = props.name ? props.name.unpack() : null;
    this.email = props.email.unpack();
  }
}

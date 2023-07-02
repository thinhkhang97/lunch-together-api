import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoggedInObject {
  @Field(() => String, { nullable: true })
  public readonly accessToken?: string;

  @Field(() => String, { nullable: true })
  public readonly refreshToken?: string;

  @Field(() => String, { nullable: true })
  public readonly errorMessage?: string;

  constructor(props: {
    accessToken?: string;
    refreshToken?: string;
    errorMessage?: string;
  }) {
    this.accessToken = props.accessToken;
    this.refreshToken = props.refreshToken;
    this.errorMessage = props.errorMessage;
  }
}

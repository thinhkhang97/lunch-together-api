import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseErrorObject {
  @Field(() => String)
  public readonly errorMessage!: string;
}

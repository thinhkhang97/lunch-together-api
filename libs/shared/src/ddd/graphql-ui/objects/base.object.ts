import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseObject {
  @Field(() => GraphQLISODateTime)
  public readonly updatedAt!: Date;

  @Field(() => GraphQLISODateTime)
  public readonly createdAt!: Date;
}

import { BaseQuery, QueryProps } from '@lib/shared/ddd/applications';

export class GetUserQuery extends BaseQuery {
  public readonly userId: string;

  constructor(props: QueryProps<GetUserQuery>) {
    super();
    this.userId = props.userId;
  }
}

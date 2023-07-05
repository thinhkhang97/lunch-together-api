import { BaseCommand, CommandProps } from '@lib/shared';

export class LoginCommand extends BaseCommand {
  public readonly email: string;
  public readonly password: string;

  constructor(props: CommandProps<LoginCommand>) {
    super();
    this.email = props.email;
    this.password = props.password;
  }
}

import { BaseCommand, CommandProps } from '@lib/shared';

export class RegisterCommand extends BaseCommand {
  public readonly email: string;
  public readonly password: string;

  constructor(props: CommandProps<RegisterCommand>) {
    super();
    this.email = props.email;
    this.password = props.password;
  }
}

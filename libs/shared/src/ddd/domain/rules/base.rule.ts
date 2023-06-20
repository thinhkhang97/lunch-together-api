export abstract class BaseRule {
  public abstract isFailed(): boolean;

  public abstract getErrorMessage(): string;
}

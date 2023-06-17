import { BaseRule } from '@lib/shared/ddd';
import { RuleViolationException } from '@lib/shared/exceptions';

export class RuleValidator {
  public static validate(...rules: Array<BaseRule>): void {
    rules.forEach((rule) => {
      if (rule.isFailed()) {
        throw new RuleViolationException(rule.getErrorMessage());
      }
    });
  }
}

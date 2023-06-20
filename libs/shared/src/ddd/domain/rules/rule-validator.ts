import { RuleViolationException } from '@lib/shared/exceptions';

import { BaseRule } from './base.rule';

export class RuleValidator {
  public static validate(...rules: Array<BaseRule>): void {
    rules.forEach((rule) => {
      if (rule.isFailed()) {
        throw new RuleViolationException(rule.getErrorMessage());
      }
    });
  }
}

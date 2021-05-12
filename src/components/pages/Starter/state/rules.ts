import { commonRules, RuleType } from 'helpers';

export const codeRules = {
  code: [
    commonRules.required,
    {
      type: RuleType.MinLength,
      value: 6,
      message: 'The code should be 6 characters',
    },
    {
      type: RuleType.MaxLength,
      value: 6,
      message: 'The code should be 6 characters',
    },
  ],
};

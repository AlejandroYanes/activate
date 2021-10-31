import { commonRules, RuleType } from 'activate-components';

const { required, password } = commonRules;

export const validationRules = {
  code: [
    required,
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
  password: [required, password],
};



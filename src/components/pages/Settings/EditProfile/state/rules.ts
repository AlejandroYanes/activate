import { commonRules, RuleType, userNameRegex, ValidationRule } from 'helpers';

const { required, email } = commonRules;

const userNamePatternRule: ValidationRule = {
  type: RuleType.MatchRegExp,
  value: userNameRegex,
  message: 'The username does not meet the requirements',
};

export const profileRules = {
  userName: [required, userNamePatternRule],
  email: [required, email],
  name: [required],
  avatar: [
    {
      ...required,
      message: 'You need to pick an avatar or an image',
    },
  ],
};

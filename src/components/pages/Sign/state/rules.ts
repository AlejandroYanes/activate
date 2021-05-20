import { commonRules, Rule, RuleType } from 'helpers/form-validations';

const validPasswordRule: Rule = {
  type: RuleType.MatchRegExp,
  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}()?\-“!@#%&\/,><’:;|_~`])\S/,
  message: `
    The password must have an upper case and a lower case letter,
    a number and a special character.
  `
};

export const validationRules = {
  email: [commonRules.required, commonRules.email],
  password: [commonRules.required, validPasswordRule],
};

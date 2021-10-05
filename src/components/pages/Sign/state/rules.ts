import { commonRules, ValidationRule, RuleType } from 'helpers/form-validations';
import { passwordRegex } from 'helpers/regex-collection';

const validPasswordRule: ValidationRule = {
  type: RuleType.MatchRegExp,
  value: passwordRegex,
  message: `
    The password must have an upper case and a lower case letter,
    a number and a special character.
  `
};

export const validationRules = {
  email: [commonRules.required, commonRules.email],
  password: [commonRules.required, validPasswordRule],
};

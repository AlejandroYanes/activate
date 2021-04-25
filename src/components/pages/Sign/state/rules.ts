import { commonRules } from 'helpers/form-validations';

// const validPasswordRule: Rule = {
//   type: RuleType.MatchRegExp,
//   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8, 15}$/,
//   message: `
//     The password must be at least 8 characters long,
//     have an upper case and a lower case letter,
//     a number and a special character
//   `
// };

export const validationRules = {
  email: [commonRules.required, commonRules.email],
  password: [commonRules.required],
};

import { commonRules } from 'helpers/form-validations';

const { required, email, password } = commonRules;

export const validationRules = {
  email: [required, email],
  password: [required, password],
};

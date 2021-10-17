import { commonRules } from 'activate-components';

const { required, email, password } = commonRules;

export const validationRules = {
  email: [required, email],
  password: [required, password],
};

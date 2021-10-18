import { commonRules } from 'helpers';

const { required, email } = commonRules;

export const validationRules = {
  email: [required, email],
};



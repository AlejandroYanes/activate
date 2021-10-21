import { commonRules } from 'activate-components';

const { required, email } = commonRules;

export const validationRules = {
  email: [required, email],
};



import { commonRules } from 'activate-components';

const { required, password } = commonRules;

function validateConfirmPassword(value, entity) {
  if (entity.newPassword !== value) {
    return 'This should match your new password';
  }
}

export const passwordRules = {
  current: [required, password],
  newPassword: [required, password],
  confirm: [required, validateConfirmPassword],
};

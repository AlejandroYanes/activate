import { commonRules } from 'helpers';

const { required } = commonRules;

function validateConfirmPassword(value, entity) {
  if (entity.newPassword !== value) {
    return 'This should match your new password';
  }
}

export const passwordRules = {
  current: [required],
  newPassword: [required],
  confirm: [required, validateConfirmPassword],
};

import { commonRules } from 'helpers';

const { required, email } = commonRules;

export const profileRules = {
  userName: [required],
  email: [required, email],
  name: [required],
  avatar: [
    {
      ...required,
      message: 'You need to pick an avatar or an image',
    },
  ],
};

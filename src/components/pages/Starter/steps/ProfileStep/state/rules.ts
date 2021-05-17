import { commonRules } from 'helpers';

const { required } = commonRules;

export const profileRules = {
  userName: [required],
  name: [required],
  lastName: [required],
  avatar: [
    {
      ...required,
      message: 'You need to pick an avatar or an image',
    },
  ],
};

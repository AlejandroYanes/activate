import { commonRules } from 'activate-components';

const { required } = commonRules;

export const profileRules = {
  userName: [required],
  name: [required],
  avatar: [
    {
      ...required,
      message: 'You need to pick an avatar or an image',
    },
  ],
};

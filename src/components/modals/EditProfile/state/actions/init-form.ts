import { UserInfo } from 'models/user';
import { ProfileFormState } from '../reducer';
import { AvatarOptions } from '../types';

const { REACT_APP_API_URL } = process.env;

export default function initForm(userInfo: UserInfo): ProfileFormState {
  const {
    avatar,
    userName,
    email,
    name,
  } = userInfo;
  const usesImage = avatar.startsWith(REACT_APP_API_URL);

  return {
    profile: {
      userName,
      email,
      name,
      avatar: usesImage ? AvatarOptions.PHOTO : avatar
    },
    errors: {},
    image: undefined,
    imagePreview: usesImage ? avatar : undefined,
    savingProfile: false,
  };
}

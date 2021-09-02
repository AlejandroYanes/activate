import { AxiosPromise, AxiosResponse } from 'axios';
import {
  AuthCredentials,
  PasswordDto,
  ProfileDto,
  SocialProvider,
  UserInfo,
} from 'models/user';
import { post, patch, get, ApiContentType } from './base';

const endpoint = 'auth';

const authApi = {
  signIn: (credentials: AuthCredentials): Promise<AxiosResponse<UserInfo>> => {
    return post(`${endpoint}/login`, credentials);
  },
  signUp: (credentials: AuthCredentials): Promise<AxiosResponse<UserInfo>> => {
    return post(`${endpoint}/signup`, credentials);
  },
  verify: (code: number): Promise<AxiosResponse<UserInfo>> => {
    return patch(`${endpoint}/verify`, { code });
  },
  updateProfile: (profileData: ProfileDto): Promise<AxiosResponse<UserInfo>> => {
    return patch(`${endpoint}/profile`, profileData);
  },
  updatePassword: (passwords: PasswordDto): Promise<AxiosResponse<UserInfo>> => {
    return patch(`${endpoint}/password`, passwords);
  },
  updateTheme: (
    theme: string,
    useDarkStyle: boolean,
  ): Promise<AxiosResponse<UserInfo>> => {
    return patch(`${endpoint}/profile`, { theme, useDarkStyle });
  },
  updateAvatar: (image: File): Promise<AxiosResponse<UserInfo>> => {
    const formData = new FormData();
    formData.append('image', image);

    return patch(
      `${endpoint}/avatar`,
      formData,
      { headers: { 'Content-Type': ApiContentType.MULTIPART } },
    );
  },
  socialAuth: (provider: SocialProvider, search: string): AxiosPromise<UserInfo> => {
    return get(`${endpoint}/social/${provider}/fallback${search}`)
  }
};

export default authApi;

import { AxiosResponse } from 'axios';
import { AuthCredentials, PasswordDto, ProfileDto, UserInfo } from 'models/user';
import { post, patch, ApiContentType } from './base';

const endpoint = 'auth';

const authApi = {
  signIn: (credentials: AuthCredentials): Promise<AxiosResponse<UserInfo>> => {
    return post(`${endpoint}/login`, credentials, { authenticated: false });
  },
  signUp: (credentials: AuthCredentials): Promise<AxiosResponse<UserInfo>> => {
    return post(`${endpoint}/signup`, credentials, { authenticated: false });
  },
  verify: (code: number): Promise<AxiosResponse<UserInfo>> => {
    return patch(`${endpoint}/verify`, { code }, { authenticated: true });
  },
  updateProfile: (profileData: ProfileDto): Promise<AxiosResponse<UserInfo>> => {
    return patch(`${endpoint}/profile`, profileData, { authenticated: true });
  },
  updatePassword: (passwords: PasswordDto): Promise<AxiosResponse<UserInfo>> => {
    return patch(`${endpoint}/password`, passwords, { authenticated: true });
  },
  updateTheme: (
    theme: string,
    useDarkStyle: boolean,
  ): Promise<AxiosResponse<UserInfo>> => {
    return patch(
      `${endpoint}/profile`,
      { theme, useDarkStyle },
      { authenticated: true },
    );
  },
  updateAvatar: (image: File): Promise<AxiosResponse<UserInfo>> => {
    const formData = new FormData();
    formData.append('image', image);

    return patch(
      `${endpoint}/avatar`,
      formData,
      {
        authenticated: true,
        headers: { 'Content-Type': ApiContentType.MULTIPART },
      },
    );
  },
};

export default authApi;

import { AxiosResponse } from 'axios';
import { AuthCredentials, ProfileDto, UserInfo } from 'models/user';
import { post, patch } from './base';

const endpoint = 'auth';

const authApi = {
  signIn: (credentials: AuthCredentials): Promise<AxiosResponse<UserInfo>> => {
    return post(`${endpoint}/login`, credentials, { authenticated: false });
  },
  signUp: (credentials: AuthCredentials): Promise<AxiosResponse<UserInfo>> => {
    return post(`${endpoint}/signup`, credentials, { authenticated: false });
  },
  verify: (code: number): Promise<AxiosResponse<UserInfo>> => {
    return post(`${endpoint}/verify`, { code }, { authenticated: true });
  },
  updateProfile: (profileData: ProfileDto): Promise<AxiosResponse<UserInfo>> => {
    return patch(`${endpoint}/profile`, profileData, { authenticated: true });
  }
};

export default authApi;

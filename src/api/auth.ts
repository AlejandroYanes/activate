import { AxiosResponse } from 'axios';
import { AuthCredentials } from 'models/user';
import { post } from './base';

const endpoint = 'auth';

export interface SignInResponse {
  sub: string;
  accessToken: string;
  email: string;
}

const authApi = {
  signIn: (credentials: AuthCredentials): Promise<AxiosResponse<SignInResponse>> => {
    return post(`${endpoint}/login`, credentials, { authenticated: false });
  },
  signUp: (credentials: AuthCredentials) => {
    return post(`${endpoint}/signup`, credentials, { authenticated: false });
  }
};

export default authApi;

import { AuthCredentials } from 'models/user';
import { post } from './base';

const endpoint = 'auth';

const authApi = {
  signIn: (credentials: AuthCredentials) => {
    return post(`${endpoint}/login`, credentials, { authenticated: false });
  },
  signUp: (credentials: AuthCredentials) => {
    return post(`${endpoint}/signup`, credentials, { authenticated: false });
  }
};

export default authApi;

import { AxiosResponse } from 'axios';
import { UserModel } from '../models/user';
import { get } from './base';

const endpoint = 'users';

const usersApi = {
  listMyFriends: (): Promise<AxiosResponse<UserModel[]>> => {
    return get(`${endpoint}/friends`, { authenticated: true });
  },
  listFriendsFor: (userId: string): Promise<AxiosResponse<UserModel[]>> => {
    return get(`${endpoint}/friends/${userId}`, { authenticated: true });
  },
};

export default usersApi;

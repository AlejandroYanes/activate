import { AxiosResponse } from 'axios';
import { UserModel } from '../models/user';
import { get } from './base';

const endpoint = 'users';

const usersApi = {
  listMyFriends: (): Promise<AxiosResponse<UserModel[]>> => {
    return get(`${endpoint}/friends`);
  },
  listFriendsFor: (userId: string): Promise<AxiosResponse<UserModel[]>> => {
    return get(`${endpoint}/friends/${userId}`);
  },
};

export default usersApi;

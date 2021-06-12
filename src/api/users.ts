import { AxiosResponse } from 'axios';
import { UserModel } from '../models/user';
import { get } from './base';

const endpoint = 'users';

const usersApi = {
  listMyFriends: (): Promise<AxiosResponse<UserModel[]>> => {
    return get(`${endpoint}/friends`);
  },
  listFriendsOf: (userId: string): Promise<AxiosResponse<UserModel[]>> => {
    return get(`${endpoint}/friends/${userId}`);
  },
  listMyPublishers: (): Promise<AxiosResponse<UserModel[]>> => {
    return get(`${endpoint}/publishers`);
  },
};

export default usersApi;

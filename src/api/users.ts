import { AxiosResponse } from 'axios';
import { ConsumerModel, PublisherModel, UserModel } from 'models/user';
import { get } from './base';

const usersApi = {
  listMyFriends: (): Promise<AxiosResponse<UserModel[]>> => {
    return get('users/friends');
  },
  listMyPublishers: (): Promise<AxiosResponse<UserModel[]>> => {
    return get('users/publishers');
  },
  listMyFollowers: (): Promise<AxiosResponse<UserModel[]>> => {
    return get('users/followers');
  },
  findPublisher: (id: string): Promise<AxiosResponse<PublisherModel>> => {
    return get(`users/publisher/${id}`);
  },
  listFollowersOf: (publisher: string): Promise<AxiosResponse<ConsumerModel[]>> => {
    return get(`users/${publisher}/followers`);
  },
  findConsumer: (id: string): Promise<AxiosResponse<ConsumerModel>> => {
    return get(`users/consumer/${id}`);
  },
  listPublishersOf: (consumer: string): Promise<AxiosResponse<UserModel[]>> => {
    return get(`users/${consumer}/publishers`);
  },
  listFriendsOf: (consumer: string): Promise<AxiosResponse<UserModel[]>> => {
    return get(`users/${consumer}/friends`);
  },
  follow: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/follow/${publisher}`);
  },
};

export default usersApi;

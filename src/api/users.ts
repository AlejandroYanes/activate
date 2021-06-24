import { AxiosResponse } from 'axios';
import { ConsumerModel, ProfileStats, PublisherModel, UserModel } from 'models/user';
import { get } from './base';

const usersApi = {
  findMyStats: (): Promise<AxiosResponse<ProfileStats>> => {
    return get('users/stats');
  },
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
  findConsumer: (id: string): Promise<AxiosResponse<ConsumerModel>> => {
    return get(`users/consumer/${id}`);
  },
  listPublishersOf: (consumer: string): Promise<AxiosResponse<PublisherModel[]>> => {
    return get(`users/${consumer}/publishers`);
  },
  listFollowersOf: (publisher: string): Promise<AxiosResponse<ConsumerModel[]>> => {
    return get(`users/${publisher}/followers`);
  },
  listFriendsOf: (consumer: string): Promise<AxiosResponse<ConsumerModel[]>> => {
    return get(`users/${consumer}/friends`);
  },
  follow: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/follow/${publisher}`);
  },
};

export default usersApi;

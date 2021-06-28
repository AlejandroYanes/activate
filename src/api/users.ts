import { AxiosResponse } from 'axios';
import { ConsumerModel, ProfileStats, PublisherModel, UserModel } from 'models/user';
import { get } from './base';

const usersApi = {
  findMyStats: (): Promise<AxiosResponse<ProfileStats>> => {
    return get('users/stats');
  },
  listMyFriends: (): Promise<AxiosResponse<ConsumerModel[]>> => {
    return get('users/friends');
  },
  listMyPending: (): Promise<AxiosResponse<ConsumerModel[]>> => {
    return get('users/pending');
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
  sendFriendRequest: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/send`);
  },
  acceptFriendRequest: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/accept`);
  },
  declineFriendRequest: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/decline`);
  },
  muteFriend: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/mute`);
  },
  unMuteFriend: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/unmute`);
  },
  blockFriend: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/block`);
  },
  unBlockFriend: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/unblock`);
  },
  unFriend: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/remove`);
  },
  mutePublisher: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/mute`);
  },
  unMutePublisher: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/unmute`);
  },
  blockPublisher: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/block`);
  },
  unBlockPublisher: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/unblock`);
  },
  follow: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/follow`);
  },
  unFollow: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/remove`);
  },
};

export default usersApi;

import { AxiosPromise, AxiosResponse } from 'axios';
import { ConsumerModel, ProfileStats, PublisherModel } from 'models/user';
import { get, PagedResponse } from './base';

const usersApi = {
  findMyStats: (): Promise<AxiosResponse<ProfileStats>> => {
    return get('users/stats');
  },
  listMyFriends: (): Promise<AxiosResponse<PagedResponse<ConsumerModel>>> => {
    return get('users/friends');
  },
  listMyPending: (): Promise<AxiosResponse<PagedResponse<ConsumerModel>>> => {
    return get('users/pending');
  },
  listMyPublishers: (): Promise<AxiosResponse<PagedResponse<PublisherModel>>> => {
    return get('users/publishers');
  },
  listMyFollowers: (): Promise<AxiosResponse<PagedResponse<ConsumerModel>>> => {
    return get('users/followers');
  },
  findPublisher: (id: string): Promise<AxiosResponse<PublisherModel>> => {
    return get(`users/publisher/${id}`);
  },
  findConsumer: (id: string): Promise<AxiosResponse<ConsumerModel>> => {
    return get(`users/consumer/${id}`);
  },
  listPublishersOf: (consumer: string)
    : Promise<AxiosResponse<PagedResponse<PublisherModel>>> => {
    return get(`users/${consumer}/publishers`);
  },
  listFollowersOf: (publisher: string)
    : Promise<AxiosResponse<PagedResponse<ConsumerModel>>> => {
    return get(`users/${publisher}/followers`);
  },
  listFriendsOf: (consumer: string)
    : Promise<AxiosResponse<PagedResponse<ConsumerModel>>> => {
    return get(`users/${consumer}/friends`);
  },
  searchPublishers: (search: string): AxiosPromise<PublisherModel[]> => {
    return get(`users/search/publishers/${search}`);
  },
  searchConsumers: (search: string): AxiosPromise<ConsumerModel[]> => {
    return get(`users/search/consumers/${search}`);
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
  unmuteFriend: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/unmute`);
  },
  blockFriend: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/block`);
  },
  unblockFriend: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/unblock`);
  },
  unfriend: (friend: string): Promise<AxiosResponse> => {
    return get(`users/friend/${friend}/remove`);
  },
  mutePublisher: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/mute`);
  },
  unmutePublisher: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/unmute`);
  },
  blockPublisher: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/block`);
  },
  unblockPublisher: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/unblock`);
  },
  follow: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/follow`);
  },
  unfollow: (publisher: string): Promise<AxiosResponse> => {
    return get(`users/publisher/${publisher}/remove`);
  },
};

export default usersApi;

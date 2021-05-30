import { UserModel } from './user';
import { EventModel } from './event';

export enum UpdateType {
  INVITATION,
  EVENT_UPDATED,
  NEW_COMMENT,
  COMMENT_RESPONDED,
  NEW_FOLLOWER,
  FRIEND_REQUEST,
  FRIEND_REQUEST_ACCEPTED,
}

export interface UpdateModel {
  type: UpdateType;
  date: Date;
  read: boolean;
  user: UserModel;
  event?: EventModel;
}

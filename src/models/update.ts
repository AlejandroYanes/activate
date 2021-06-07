import { UserModel } from './user';
import { EventModel } from './event';
import { CommentModel } from './comment';

export enum UpdateType {
  INVITATION,
  EVENT_UPDATED,
  NEW_COMMENT,
  COMMENT_RESPONDED,
  NEW_FOLLOWER,
  FRIEND_REQUEST,
  FRIEND_REQUEST_ACCEPTED,
  NEW_EVENT_PARTICIPANT,
}

export interface UpdateModel {
  id: string;
  type: UpdateType;
  dateSent: Date;
  seen: boolean;
  creator: UserModel;
  receiver: UserModel;
  event?: EventModel;
  comment?: CommentModel;
}

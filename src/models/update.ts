import { UserModel } from './user';
import { EventModel } from './event';
import { CommentModel } from './comment';

export enum UpdateType {
  INVITATION = 0,
  EVENT_UPDATED = 1,
  NEW_COMMENT = 2,
  COMMENT_RESPONDED = 3,
  NEW_FOLLOWER = 4,
  FRIEND_REQUEST = 5,
  FRIEND_REQUEST_ACCEPTED = 6,
  NEW_EVENT_PARTICIPANT = 7,
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

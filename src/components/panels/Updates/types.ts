export enum UpdateType {
  INVITATION,
  EVENT_UPDATED,
  NEW_COMMENT,
  COMMENT_RESPONDED,
  NEW_FOLLOWER,
  FRIEND_REQUEST,
  FRIEND_REQUEST_ACCEPTED,
}

export interface EventLinkingUpdate {
  user: {
    avatarUrl: string;
    name: string;
  };
  event: {
    id: string;
    name: string;
    going?: boolean;
    owned?: boolean;
  };
}

export interface UserLinkingUpdate {
  user: {
    avatarUrl: string;
    name: string;
  };
}
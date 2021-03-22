import React, { FunctionComponent } from 'react';
import { EventLinkingUpdate, UpdateType, UserLinkingUpdate } from '../types';
import Invitation from './Invitation';
import EventUpdated from './EventUpdated';
import NewComment from './NewComment';
import CommentResponded from './CommentResponded';
import NewFollower from './NewFollower';
import FriendRequest from './FriendRequest';
import FriendRequestAccepted from './FriendRequestAccepted';

export interface MessageProps {
  type: UpdateType;
  content: EventLinkingUpdate | UserLinkingUpdate;
}

const messages = {
  [UpdateType.INVITATION]: Invitation,
  [UpdateType.EVENT_UPDATED]: EventUpdated,
  [UpdateType.NEW_COMMENT]: NewComment,
  [UpdateType.COMMENT_RESPONDED]: CommentResponded,
  [UpdateType.NEW_FOLLOWER]: NewFollower,
  [UpdateType.FRIEND_REQUEST]: FriendRequest,
  [UpdateType.FRIEND_REQUEST_ACCEPTED]: FriendRequestAccepted,
};

const Message: FunctionComponent<MessageProps> = (props) => {
  const { type } = props;
  const Component = messages[type];

  return <Component {...props} />;
};

export default Message;

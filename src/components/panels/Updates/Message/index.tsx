import React, { FunctionComponent } from 'react';
import { UserModel } from 'models/user';
import { EventModel } from 'models/event';
import { UpdateType } from 'models/update';
import Invitation from './Invitation';
import EventUpdated from './EventUpdated';
import NewComment from './NewComment';
import CommentResponded from './CommentResponded';
import NewFollower from './NewFollower';
import FriendRequest from './FriendRequest';
import FriendRequestAccepted from './FriendRequestAccepted';
import NewEvent from './NewEvent';
import NewParticipant from './NewParticipant';

export interface MessageProps {
  type: UpdateType;
  user: UserModel;
  event?: EventModel;
}

const messages = {
  [UpdateType.INVITATION]: Invitation,
  [UpdateType.EVENT_UPDATED]: EventUpdated,
  [UpdateType.NEW_COMMENT]: NewComment,
  [UpdateType.COMMENT_RESPONDED]: CommentResponded,
  [UpdateType.NEW_FOLLOWER]: NewFollower,
  [UpdateType.FRIEND_REQUEST]: FriendRequest,
  [UpdateType.FRIEND_REQUEST_ACCEPTED]: FriendRequestAccepted,
  [UpdateType.NEW_EVENT]: NewEvent,
  [UpdateType.NEW_EVENT_PARTICIPANT]: NewParticipant,
};

const Message: FunctionComponent<MessageProps> = (props) => {
  const { type } = props;
  const Component = messages[type];

  return <Component {...props} />;
};

export default Message;

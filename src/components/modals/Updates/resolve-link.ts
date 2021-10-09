import { UpdateModel, UpdateType } from 'models/update';

export default function resolveLink(update: UpdateModel) {
  const { type, creator: { userName }, event } = update;

  switch (type) {
    case UpdateType.FRIEND_REQUEST:
    case UpdateType.FRIEND_REQUEST_ACCEPTED:
    case UpdateType.NEW_FOLLOWER:
    case UpdateType.NEW_EVENT_PARTICIPANT:
      return `app/user/${userName}`;
    case UpdateType.NEW_EVENT:
    case UpdateType.EVENT_UPDATED:
    case UpdateType.NEW_COMMENT:
    case UpdateType.COMMENT_RESPONDED:
    case UpdateType.INVITATION:
      return `/app/event/${event.id}`;
    default:
      return '/app';
  }
}

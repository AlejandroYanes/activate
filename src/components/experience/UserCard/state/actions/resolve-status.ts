import { RelationshipStatus } from 'models/user';

export default function resolveStatus(status: RelationshipStatus) {
  const isPending = status === RelationshipStatus.PENDING;
  const isPendingForMe = status === RelationshipStatus.PENDING_FOR_ME;
  const isMyFriend = (
    status === RelationshipStatus.ACCEPTED ||
    status === RelationshipStatus.MUTED
  );

  return { isPending, isPendingForMe, isMyFriend };
}

import { FollowerStatus } from 'models/user';

export default function amIFollowing(status: FollowerStatus) {
  return (
    status === FollowerStatus.FOLLOWING ||
    status === FollowerStatus.MUTED
  );
}

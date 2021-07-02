import { FunctionComponent } from 'react';
import { ConsumerModel, RelationshipStatus } from 'models/user';
import { QueryKey } from 'components/providers/Query';
import { ConsumerActions } from 'components/experience/UserActions';
import PendingAction from './PendingAction';

interface Props {
  user: ConsumerModel;
}

const FriendActions: FunctionComponent<Props> = (props) => {
  const { user } = props;
  const { id, relationStatus } = user;
  const pending = relationStatus === RelationshipStatus.PENDING;

  if (pending) {
    return (
      <PendingAction id={id} />
    );
  }

  return (
    <ConsumerActions user={user} queryKey={QueryKey.FETCH_MY_FRIENDS} />
  );
};

export default FriendActions;

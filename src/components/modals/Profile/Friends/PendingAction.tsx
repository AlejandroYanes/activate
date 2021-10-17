import { useState } from 'react';
import { useQueryClient } from 'react-query';
import {
  Badge,
  Button,
  NotificationType,
  RenderIf,
  showNotification
} from 'activate-components';
import usersApi from 'api/users';
import { QueryKey } from 'components/providers/Query';

const PendingAction = ({ id }) => {
  const queryClient = useQueryClient();
  const [accepted, setAccepted] = useState(false);

  const acceptRequest = () => {
    usersApi.acceptFriendRequest(id)
      .then(() => {
        setAccepted(true);
        queryClient.invalidateQueries(QueryKey.FETCH_MY_PROFILE_STATS);
      })
      .catch(() => {
        showNotification({
          type: NotificationType.ERROR,
          message: 'We couldn\'t complete the request, please try again later.'
        });
      });
  };

  return (
    <RenderIf condition={!accepted} fallback={<Badge color="brand" label="Friends" />}>
      <Button onClick={acceptRequest} label="Accept" variant="outline" />
    </RenderIf>
  );
};

export default PendingAction;

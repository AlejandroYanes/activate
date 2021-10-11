import { useState } from 'react';
import { useQueryClient } from 'react-query';
import usersApi from 'api/users';
import { NotificationType, showNotification } from 'notifications';
import { QueryKey } from 'components/providers/Query';
import RenderIf from 'components/base-components/RenderIf';
import Badge from 'components/base-components/Badge';
import { Button } from 'components/base-components/Button';

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

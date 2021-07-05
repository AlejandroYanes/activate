import React, { FunctionComponent } from 'react';
import { formatAmount } from 'helpers';
import { EventModel } from 'models/event';
import AvatarGroup from 'components/base-components/AvatarGroup';

interface Props {
  event: EventModel;
}

function resolveLabel(friendsCount: number, followersCount: number) {
  if (friendsCount === followersCount) {
    return '';
  }

  if (!friendsCount) {
    return `${formatAmount(followersCount)} people are going`;
  }
  const difference = followersCount - friendsCount;
  return `+ ${formatAmount(difference)} more are going`
}

const Attendance: FunctionComponent<Props> = (props) => {
  const { event: { relativesFollowers, followersCount } } = props;
  const avatars = relativesFollowers.map((follower) => follower.avatar);

  if (followersCount) {
    return (
      <AvatarGroup
        icons={avatars}
        label={resolveLabel(relativesFollowers.length, followersCount)}
        size="small"
      />
    );
  }

  return null;
};

export default Attendance;

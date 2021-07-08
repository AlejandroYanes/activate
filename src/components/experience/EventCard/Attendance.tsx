import React, { FunctionComponent } from 'react';
import { formatAmount } from 'helpers';
import { EventModel } from 'models/event';
import { Layout, useAppLayout } from 'components/providers/Layout';
import AvatarGroup from 'components/base-components/AvatarGroup';

interface Props {
  event: EventModel;
}

function resolveLabel(
  friendsCount: number,
  followersCount: number,
  layout: Layout,
) {

  if (friendsCount === followersCount) {
    return '';
  }

  const isMobile = layout === Layout.MOBILE;

  if (!friendsCount) {
    return isMobile
      ? `${formatAmount(followersCount)}`
      : `${formatAmount(followersCount)} people are going`;
  }

  const difference = followersCount - friendsCount;
  return isMobile
    ? `+ ${formatAmount(difference)}`
    : `+ ${formatAmount(difference)} more are going`;
}

const Attendance: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { event: { relativesFollowers, followersCount } } = props;
  const avatars = relativesFollowers.map((follower) => follower.avatar);

  if (followersCount) {
    const label = resolveLabel(relativesFollowers.length, followersCount, layout);

    return (
      <AvatarGroup
        icons={avatars}
        label={label}
        size="small"
      />
    );
  }

  return null;
};

export default Attendance;

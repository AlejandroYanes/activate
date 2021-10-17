import React, { FunctionComponent } from 'react';
import {
  AvatarGroup,
  useAppLayout,
  Layout,
  PositionProps,
  formatAmount
} from 'activate-components';
import { EventModel } from 'models/event';

interface Props extends PositionProps {
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
  const { event: { friends, followersCount }, ...rest } = props;
  const avatars = friends.map((friend) => friend.avatar);

  if (followersCount) {
    const label = resolveLabel(friends.length, followersCount, layout);

    return (
      <AvatarGroup
        {...rest}
        icons={avatars}
        label={label}
        size="small"
      />
    );
  }

  return null;
};

export default Attendance;

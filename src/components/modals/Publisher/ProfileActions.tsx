import React, { FunctionComponent, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { FollowerStatus, PublisherModel } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import updateRelation, { actions } from './update-relation';

interface Props {
  user: PublisherModel;
}

const MenuTrigger = ({ toggleMenu }) => (
  <IconButton
    icon="MORE_VERT"
    onClick={toggleMenu}
    color="background"
    variant="flat"
  />
);

const emptyAction = () => undefined;

const ProfileActions: FunctionComponent<Props> = (props) => {
  const { user: { id, name, followerStatus } } = props;
  const queryClient = useQueryClient();

  const [ follow, mute, unmute, block, unfollow ] = useMemo(() => (
    actions.map((action) => (
      () => updateRelation(id, action, queryClient)
    ))
  ), [id]);

  const unfollowed = followerStatus === FollowerStatus.UNRELATED;
  const followedByMe = (
    followerStatus === FollowerStatus.FOLLOWING ||
    followerStatus === FollowerStatus.MUTED
  );
  const muted = followerStatus === FollowerStatus.MUTED;

  return (
    <Menu trigger={MenuTrigger} align="start">
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Text weight="bold" ellipsis>{name}</Text>
      </FlexBox>
      <RenderIf condition={unfollowed}>
        <MenuItem label="Follow" onClick={follow} />
      </RenderIf>
      <RenderIf condition={followedByMe}>
        <MenuItem label="Send a message" onClick={emptyAction} />
      </RenderIf>
      <RenderIf condition={followedByMe && !muted}>
        <MenuItem label="Mute notifications" onClick={mute} />
      </RenderIf>
      <RenderIf condition={muted}>
        <MenuItem label="Allow notifications" onClick={unmute} />
      </RenderIf>
      <RenderIf condition={followedByMe}>
        <MenuItem label="Unfollow" danger onClick={unfollow} />
      </RenderIf>
      <MenuItem label="Block" danger onClick={block} />
    </Menu>
  );
};

export default ProfileActions;

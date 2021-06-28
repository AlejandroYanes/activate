import React, { FunctionComponent, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { FollowerStatus, PublisherModel } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { Button, IconButton } from 'components/base-components/Button';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import updateRelation, { Actions } from './update-relation';

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

  const { follow, mute, unMute, block, unFollow } = useMemo(() => ({
    follow: () => updateRelation(id, Actions.FOLLOW, queryClient),
    mute: () => updateRelation(id, Actions.MUTE, queryClient),
    unMute: () => updateRelation(id, Actions.UNMUTE, queryClient),
    block: () => updateRelation(id, Actions.BLOCK, queryClient),
    unFollow: () => updateRelation(id, Actions.UNFOLLOW, queryClient),
  }), [id]);

  const followedByMe = (
    followerStatus === FollowerStatus.FOLLOWING ||
    followerStatus === FollowerStatus.MUTED
  );
  const muted = followerStatus === FollowerStatus.MUTED;

  if (!followedByMe) {
    return (
      <Button
        onClick={follow}
        label="Follow"
        variant="outline"
        color="brand"
      />
    );
  }

  return (
    <Menu trigger={MenuTrigger} align="start">
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Text weight="bold" ellipsis>{name}</Text>
      </FlexBox>
      <MenuItem label="Send a message" onClick={emptyAction} />
      <RenderIf condition={!muted}>
        <MenuItem label="Mute notifications" onClick={mute} />
      </RenderIf>
      <RenderIf condition={muted}>
        <MenuItem label="Allow notifications" onClick={unMute} />
      </RenderIf>
      <MenuItem label="Unfollow" danger onClick={unFollow} />
      <MenuItem label="Stop seeing events" danger onClick={block} />
    </Menu>
  );
};

export default ProfileActions;

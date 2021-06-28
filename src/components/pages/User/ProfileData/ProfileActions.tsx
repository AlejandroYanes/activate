import { FunctionComponent, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { ConsumerModel, RelationshipStatus } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { Button, IconButton } from 'components/base-components/Button';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import updateRelation, { actions } from './update-relation';

interface Props {
  user: ConsumerModel;
}

const menuTrigger = ({ toggleMenu, ...rest }) => (
  <IconButton
    icon="MORE_VERT"
    color="background"
    onClick={toggleMenu}
    {...rest}
  />
);

const emptyAction = () => undefined;

const ProfileActions: FunctionComponent<Props> = (props) => {
  const { user: { id, name, relationStatus } } = props;
  const queryClient = useQueryClient();

  const [
    addFriend,
    acceptFriend,
    mute,
    unMute,
    block,
    unBlock,
    unFriend,
  ] = useMemo(() => (
    actions.map(action => (
      () => updateRelation(id, action, queryClient)
    ))
  ), [id]);

  const unrelated = relationStatus === RelationshipStatus.UNRELATED;
  const pending = relationStatus === RelationshipStatus.PENDING;
  const muted = relationStatus === RelationshipStatus.MUTED;
  const blocked = relationStatus === RelationshipStatus.BLOCKED;
  const myFriend = (
    relationStatus === RelationshipStatus.ACCEPTED ||
    relationStatus === RelationshipStatus.MUTED
  );

  if (unrelated) {
    return (
      <Button
        onClick={addFriend}
        label="Add Friend"
        variant="outline"
        color="brand"
      />
    );
  }

  if (pending) {
    return (
      <Button
        onClick={acceptFriend}
        label="Accept Friend"
        variant="outline"
        color="brand"
      />
    );
  }

  return (
    <Menu trigger={menuTrigger}>
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Text weight="bold" ellipsis>{name}</Text>
      </FlexBox>
      <RenderIf condition={myFriend}>
        <MenuItem label="Send a message" onClick={emptyAction} />
      </RenderIf>
      <RenderIf condition={myFriend && !muted}>
        <MenuItem label="Mute notifications" onClick={mute} />
      </RenderIf>
      <RenderIf condition={myFriend && muted}>
        <MenuItem label="Allow notifications" onClick={unMute} />
      </RenderIf>
      <RenderIf condition={myFriend}>
        <MenuItem label="Unfriend" danger onClick={unFriend} />
      </RenderIf>
      <RenderIf condition={!blocked}>
        <MenuItem label="Block" danger onClick={block} />
      </RenderIf>
      <RenderIf condition={blocked}>
        <MenuItem label="Unblock" onClick={unBlock} />
      </RenderIf>
    </Menu>
  );
};

export default ProfileActions;

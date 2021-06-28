import { FunctionComponent, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { ConsumerModel, RelationshipStatus } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import updateRelation, { actions } from './update-relation';
import { usePublisherId } from './context';

interface Props {
  user: ConsumerModel;
}

const MenuTrigger = ({ toggleMenu }) => (
  <IconButton
    icon="MORE_VERT"
    onClick={toggleMenu}
    color="background"
    mL
  />
);

const emptyAction = () => undefined;

const FollowerActions: FunctionComponent<Props> = (props) => {
  const { user: { id, name, relationStatus } } = props;
  const publisher = usePublisherId();
  const queryClient = useQueryClient();

  const [
    addFriend,
    acceptFriend,
    mute,
    unmute,
    block,
    unblock,
    unfriend,
  ] = useMemo(() => (
    actions.map(action => (
      () => updateRelation(id, publisher, action, queryClient)
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

  return (
    <Menu trigger={MenuTrigger}>
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
        <MenuItem label="Allow notifications" onClick={unmute} />
      </RenderIf>
      <RenderIf condition={unrelated}>
        <MenuItem label="Send friend request" onClick={addFriend} />
      </RenderIf>
      <RenderIf condition={pending}>
        <MenuItem label="Accept friend request" onClick={acceptFriend} />
      </RenderIf>
      <RenderIf condition={myFriend}>
        <MenuItem label="Unfriend" danger onClick={unfriend} />
      </RenderIf>
      <RenderIf condition={!blocked}>
        <MenuItem label="Block" danger onClick={block} />
      </RenderIf>
      <RenderIf condition={blocked}>
        <MenuItem label="Unblock" onClick={unblock} />
      </RenderIf>
    </Menu>
  );
};

export default FollowerActions;

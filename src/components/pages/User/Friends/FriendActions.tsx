import { FunctionComponent, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { ConsumerModel, RelationshipStatus } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import { useConsumerId } from '../context';
import updateRelation, { actions } from './update-relation';

interface Props {
  user: ConsumerModel;
}

const MenuTrigger = ({ toggleMenu }) => (
  <IconButton
    icon="MORE_VERT"
    color="background"
    onClick={toggleMenu}
  />
);

const emptyAction = () => undefined;

const FriendActions: FunctionComponent<Props> = (props) => {
  const { user: { id, name, relationStatus } } = props;
  const consumerId = useConsumerId();
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
      () => updateRelation(id, consumerId, action, queryClient)
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
        <MenuItem label="Allow notifications" onClick={unMute} />
      </RenderIf>
      <RenderIf condition={unrelated}>
        <MenuItem label="Send friend request" onClick={addFriend} />
      </RenderIf>
      <RenderIf condition={pending}>
        <MenuItem label="Accept friend request" onClick={acceptFriend} />
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

export default FriendActions;

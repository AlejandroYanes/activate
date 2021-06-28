import { FunctionComponent, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { ConsumerModel, RelationshipStatus } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import RenderIf from 'components/base-components/RenderIf';
import PendingAction from './PendingAction';
import updateRelation, { Actions } from './update-relation';

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
  const queryClient = useQueryClient();
  const { mute, unMute, block, unFriend } = useMemo(() => ({
    mute: () => updateRelation(id, Actions.MUTE, queryClient),
    unMute: () => updateRelation(id, Actions.UNMUTE, queryClient),
    block: () => updateRelation(id, Actions.BLOCK, queryClient),
    unFriend: () => updateRelation(id, Actions.UNFRIEND, queryClient),
  }), [id]);

  const pending = relationStatus === RelationshipStatus.PENDING;
  const muted = relationStatus === RelationshipStatus.MUTED;

  if (pending) {
    return (
      <PendingAction id={id} />
    );
  }

  return (
    <Menu trigger={MenuTrigger}>
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
      <MenuItem label="Block" danger onClick={block} />
      <MenuItem label="Unfriend" danger onClick={unFriend} />
    </Menu>
  );
};

export default FriendActions;

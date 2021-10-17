import { FunctionComponent } from 'react';
import {
  FlexBox,
  IconButton,
  Menu,
  MenuItem,
  RenderIf,
  Text,
  Title
} from 'activate-components';
import { ConsumerModel, RelationshipStatus } from 'models/user';
import { useConsumerActions } from './use-user-actions';

interface Props {
  user: ConsumerModel;
  queryKey;
}

const MenuTrigger = ({ toggleMenu }) => (
  <IconButton
    icon="MORE_VERT"
    color="background"
    onClick={toggleMenu}
  />
);

const emptyAction = () => undefined;

const ConsumerActions: FunctionComponent<Props> = (props) => {
  const { queryKey, user: { id, name, relationStatus } } = props;
  const [
    addFriend,
    acceptFriend,
    declineFriend,
    mute,
    unmute,
    block,
    unfriend,
  ] = useConsumerActions(queryKey, id);

  const unrelated = relationStatus === RelationshipStatus.UNRELATED;
  const pending = relationStatus === RelationshipStatus.PENDING;
  const pendingForMe = relationStatus === RelationshipStatus.PENDING_FOR_ME;
  const muted = relationStatus === RelationshipStatus.MUTED;
  const myFriend = (
    relationStatus === RelationshipStatus.ACCEPTED ||
    relationStatus === RelationshipStatus.MUTED
  );

  return (
    <Menu trigger={MenuTrigger}>
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Title level={3} align="center" ellipsis>{name}</Title>
      </FlexBox>
      <RenderIf condition={pending}>
        <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
          <Text ellipsis data-el="pending-req-msg">
            You sent a friend request.
          </Text>
        </FlexBox>
      </RenderIf>
      <RenderIf condition={myFriend}>
        <MenuItem id="send-msg-action" label="Send a message" onClick={emptyAction} />
      </RenderIf>
      <RenderIf condition={myFriend && !muted}>
        <MenuItem id="mute-action" label="Mute notifications" onClick={mute} />
      </RenderIf>
      <RenderIf condition={myFriend && muted}>
        <MenuItem id="unmute-action" label="Allow notifications" onClick={unmute} />
      </RenderIf>
      <RenderIf condition={unrelated}>
        <MenuItem
          id="send-req-action"
          label="Send friend request"
          onClick={addFriend}
        />
      </RenderIf>
      <RenderIf condition={pendingForMe}>
        <MenuItem
          id="accept-req-action"
          label="Accept friend request"
          onClick={acceptFriend}
        />
        <MenuItem
          id="decline-req-action"
          label="Remove friend request"
          onClick={declineFriend}
        />
      </RenderIf>
      <RenderIf condition={myFriend}>
        <MenuItem id="unfriend-action" label="Unfriend" danger onClick={unfriend} />
      </RenderIf>
      <MenuItem id="block-action" label="Block" danger onClick={block} />
    </Menu>
  );
};

export default ConsumerActions;

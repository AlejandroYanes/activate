import { FunctionComponent, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { FollowerStatus, PublisherModel } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import updateRelation, { Actions } from './update-relation';

interface Props {
  user: PublisherModel;
}

const menuTrigger = ({ toggleMenu, ...rest }) => (
  <IconButton
    icon="MORE_VERT"
    onClick={toggleMenu}
    color="background"
    {...rest}
  />
);

const emptyAction = () => undefined;

const PublisherActions: FunctionComponent<Props> = (props) => {
  const { user: { id, name, followerStatus } } = props;
  const queryClient = useQueryClient();
  const { mute, unMute, block, unFollow } = useMemo(() => ({
    mute: () => updateRelation(id, Actions.MUTE, queryClient),
    unMute: () => updateRelation(id, Actions.UNMUTE, queryClient),
    block: () => updateRelation(id, Actions.BLOCK, queryClient),
    unFollow: () => updateRelation(id, Actions.UNFOLLOW, queryClient),
  }), [id]);

  const muted = followerStatus === FollowerStatus.MUTED;

  return (
    <Menu trigger={menuTrigger}>
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
      <MenuItem label="Stop seeing events" onClick={block} />
      <MenuItem label="Unfollow" danger onClick={unFollow} />
    </Menu>
  );
};

export default PublisherActions;

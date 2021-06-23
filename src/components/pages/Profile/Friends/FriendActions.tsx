import { FunctionComponent } from 'react';
import { UserModel } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';

interface Props {
  user: UserModel;
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

const FriendActions: FunctionComponent<Props> = (props) => {
  const { user } = props;
  const { name, lastName } = user;

  return (
    <Menu trigger={menuTrigger}>
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Text weight="bold" ellipsis>{`${name} ${lastName}`}</Text>
      </FlexBox>
      <MenuItem label="Send a message" onClick={emptyAction} />
      <MenuItem label="Mute notifications" onClick={emptyAction} />
      <MenuItem label="Unfriend" danger onClick={emptyAction} />
    </Menu>
  );
};

export default FriendActions;

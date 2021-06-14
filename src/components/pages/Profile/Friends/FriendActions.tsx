import { FunctionComponent } from 'react';
import { UserModel } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';

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
  const { name } = user;

  return (
    <Menu trigger={menuTrigger}>
      <MenuItem label={`Send a message to ${name}`} onClick={emptyAction} />
      <MenuItem label={`Mute notifications form ${name}`} onClick={emptyAction} />
      <MenuItem label={`Unfriend ${name}`} danger onClick={emptyAction} />
    </Menu>
  );
};

export default FriendActions;

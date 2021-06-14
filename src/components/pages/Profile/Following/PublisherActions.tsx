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

const PublisherActions: FunctionComponent<Props> = (props) => {
  const { user } = props;
  const { name } = user;

  return (
    <Menu trigger={menuTrigger}>
      <MenuItem label={`Send a message to ${name}`} onClick={emptyAction} />
      <MenuItem label={`Mute notifications form ${name}`} onClick={emptyAction} />
      <MenuItem label={`Stop seeing events from ${name}`} onClick={emptyAction} />
      <MenuItem label={`Unfollow ${name}`} danger onClick={emptyAction} />
    </Menu>
  );
};

export default PublisherActions;

import { FunctionComponent } from 'react';
import { ConsumerModel } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { Button, IconButton } from 'components/base-components/Button';

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

const Actions: FunctionComponent<Props> = (props) => {
  const { user: { name, myFriend } } = props;

  if (!myFriend) {
    return (
      <Button onClick={emptyAction} label="Add Friend" variant="outline" color="brand" />
    );
  }

  return (
    <Menu trigger={menuTrigger} align="end" {...props}>
      <MenuItem label={`Send a message to ${name}`} onClick={emptyAction} />
      <MenuItem label={`Mute notifications form ${name}`} onClick={emptyAction} />
      <MenuItem label={`Unfriend ${name}`} danger onClick={emptyAction} />
    </Menu>
  );
};

export default Actions;

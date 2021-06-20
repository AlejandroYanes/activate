import { FunctionComponent } from 'react';
import { PublisherModel } from 'models/user';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { Button, IconButton } from 'components/base-components/Button';

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
  const { user } = props;
  const { name, followedByMe } = user;

  if (!followedByMe) {
    return (
      <Button onClick={emptyAction} label="Follow" variant="flat" color="brand" />
    );
  }

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

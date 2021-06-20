import React, { FunctionComponent } from 'react';
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
    variant="flat"
    {...rest}
  />
);

const emptyAction = () => undefined;

const Actions: FunctionComponent<Props> = (props) => {
  const { user } = props;
  const { name, followedByMe } = user;

  if (!followedByMe) {
    return (
      <Button
        onClick={emptyAction}
        label="Follow"
        variant="outline"
        color="brand"
      />
    );
  }

  return (
    <Menu trigger={menuTrigger} align="start">
      <MenuItem
        label={`Send a message to ${name}`}
        // icon="MESSAGE"
        onClick={emptyAction}
      />
      <MenuItem
        label={`Mute notifications form ${name}`}
        // icon="BELL"
        onClick={emptyAction}
      />
      <MenuItem
        label={`Stop seeing events from ${name}`}
        // icon="CALENDAR_FILLED"
        onClick={emptyAction}
      />
      <MenuItem
        label={`Unfollow ${name}`}
        // icon="USER_PLUS"
        danger
        onClick={emptyAction}
      />
    </Menu>
  );
};

export default Actions;

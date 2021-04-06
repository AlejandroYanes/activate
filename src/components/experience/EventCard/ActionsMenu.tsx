import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';

const emptyAction = () => undefined;

const menuTrigger = ({ toggleMenu, ...rest }) => (
  <IconButton
    icon={Icons.MORE_VERT}
    onClick={toggleMenu}
    buttonColor="font"
    size="large"
    {...rest}
  />
);

const ActionsMenu: FunctionComponent<PositionProps> = (props) => {
  return (
    <Menu trigger={menuTrigger} align="end" {...props}>
      <MenuItem label="Open details" onClick={emptyAction} />
      <MenuItem label="Copy Link" onClick={emptyAction} />
      <MenuItem label="Report this event" onClick={emptyAction} />
    </Menu>
  );
};

export default ActionsMenu;

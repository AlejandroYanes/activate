import { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';

interface Props extends PositionProps {
  author: string;
}

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

const ActionsMenu: FunctionComponent<Props> = (props) => {
  const { author, ...positionProps } = props;
  
  return (
    <Menu trigger={menuTrigger} align="end" {...positionProps}>
      <MenuItem label="Open details" onClick={emptyAction} />
      <MenuItem label="Copy Link" onClick={emptyAction} />
      <MenuItem label={`Unfollow ${author}`} danger onClick={emptyAction} />
      <MenuItem label="Report this event" danger onClick={emptyAction} />
    </Menu>
  );
};

export default ActionsMenu;

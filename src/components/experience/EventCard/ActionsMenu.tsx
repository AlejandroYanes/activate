import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { PositionProps } from 'helpers';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';

interface Props extends PositionProps {
  author: string;
}

const emptyAction = () => undefined;

const menuTrigger = ({ toggleMenu, ...rest }) => (
  <IconButton
    icon="MORE_VERT"
    onClick={toggleMenu}
    color="background"
    size="large"
    {...rest}
  />
);

const ActionsMenu: FunctionComponent<Props> = (props) => {
  const { author, ...positionProps } = props;
  const { push } = useHistory();

  const openDetails = () => {
    push('/app/event-details');
  };

  return (
    <Menu trigger={menuTrigger} align="end" {...positionProps}>
      <MenuItem label="Open details" onClick={openDetails} />
      <MenuItem label="Copy Link" onClick={emptyAction} />
      <MenuItem label={`Unfollow ${author}`} danger onClick={emptyAction} />
      <MenuItem label="Report this event" danger onClick={emptyAction} />
    </Menu>
  );
};

export default ActionsMenu;

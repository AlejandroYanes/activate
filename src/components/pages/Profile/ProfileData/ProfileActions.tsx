import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { PositionProps } from 'helpers';
import { Modals } from 'components/modals';
import { useAuthActions } from 'components/providers/Auth';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { IconButton } from 'components/base-components/Button';

const menuTrigger = ({ toggleMenu, ...rest }) => (
  <IconButton
    icon="MORE_VERT"
    onClick={toggleMenu}
    color="background"
    {...rest}
  />
);

const ProfileActions: FunctionComponent<PositionProps> = (props) => {
  const { push } = useHistory();
  const { logout } = useAuthActions();

  const openEditProfile = () => {
    push(Modals.EDIT_PROFILE);
  };

  const openChangePassword = () => {
    push(Modals.CHANGE_PASSWORD);
  };

  return (
    <Menu trigger={menuTrigger} align="end" {...props}>
      <MenuItem label="Change Profile" onClick={openEditProfile} />
      <MenuItem label="Change Password" onClick={openChangePassword} />
      <MenuItem label="Logout" danger onClick={logout} />
    </Menu>
  );
};

export default ProfileActions;

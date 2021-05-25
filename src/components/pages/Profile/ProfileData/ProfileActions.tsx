import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { PositionProps } from 'helpers';
import { useAuthActions } from 'components/providers/Auth';
import { Menu, MenuItem } from 'components/base-components/Menu';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import { Modals } from '../../../modals';

const menuTrigger = ({ toggleMenu, ...rest }) => (
  <IconButton
    icon={Icons.MORE_VERT}
    onClick={toggleMenu}
    buttonColor="font"
    {...rest}
  />
);

const ProfileActions: FunctionComponent<PositionProps> = (props) => {
  const { push } = useHistory();
  const { logout } = useAuthActions();

  const openEditProfile = () => {
    push(Modals.EDIT_PROFILE);
  };

  return (
    <Menu trigger={menuTrigger} align="end" {...props}>
      <MenuItem label="Change Profile" onClick={openEditProfile} />
      <MenuItem label="Change Email" onClick={openEditProfile} />
      <MenuItem label="Change Password" onClick={openEditProfile} />
      <MenuItem label="Logout" danger onClick={logout} />
    </Menu>
  );
};

export default ProfileActions;

import { FunctionComponent } from 'react';
import { useAuthActions, useAuthData } from 'components/providers/Auth';
import Avatar from 'components/base-components/Avatar';
import { Menu, MenuItem, MenuLink } from 'components/base-components/Menu';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';

const MenuTrigger = ({ toggleMenu, avatar }) => (
  <Avatar size="small" src={avatar} onClick={toggleMenu} />
);

const ProfileMenu: FunctionComponent = () => {
  const { userInfo: { avatar } } = useAuthData();
  const { logout } = useAuthActions();

  return (
    <Menu trigger={MenuTrigger} avatar={avatar}>
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Text weight="light" align="center" ellipsis>Go to</Text>
      </FlexBox>
      <MenuLink label="Talks" to="/app/talks" />
      <MenuLink label="Updates" to="/app/updates" />
      <MenuLink label="Profile" to="/app/profile" />
      <MenuLink label="Settings" to="/app/settings" />
      <MenuItem label="Log out" onClick={logout} danger />
    </Menu>
  );
};

export default ProfileMenu;

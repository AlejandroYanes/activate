import { FunctionComponent } from 'react';
import { Layout } from 'components/base-components/Configuration';
import { useAuthActions, useAuthData } from 'components/providers/Auth';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import { Title } from 'components/base-components/Typography';
import RenderByLayout from 'components/base-components/RenderByLayout';
import { Menu, MenuItem, MenuLink } from 'components/base-components/Menu';

const MenuTrigger = ({ toggleMenu, avatar, size }) => (
  <Avatar size={size} src={avatar} onClick={toggleMenu} />
);

const PrimaryRender: FunctionComponent = () => {
  const { userInfo: { avatar } } = useAuthData();
  const { logout } = useAuthActions();

  return (
    <Menu trigger={MenuTrigger} avatar={avatar} size="medium">
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Title level={3} align="center" ellipsis>Go to</Title>
      </FlexBox>
      <MenuLink label="Profile" to="/app/profile" />
      <MenuLink label="Settings" to="/app/settings" />
      <MenuItem label="Log out" onClick={logout} danger />
    </Menu>
  );
};

const MobileRender: FunctionComponent = () => {
  const { userInfo: { avatar } } = useAuthData();
  const { logout } = useAuthActions();

  return (
    <Menu trigger={MenuTrigger} avatar={avatar} size="small">
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Title level={3} align="center" ellipsis>Go to</Title>
      </FlexBox>
      <MenuLink label="Talks" to="/app/talks" />
      <MenuLink label="Updates" to="/app/updates" />
      <MenuLink label="Profile" to="/app/profile" />
      <MenuLink label="Settings" to="/app/settings" />
      <MenuItem label="Log out" onClick={logout} danger />
    </Menu>
  );
};

const renderMap = {
  [Layout.DESKTOP]: PrimaryRender,
  [Layout.TABLET]: PrimaryRender,
  [Layout.MOBILE]: MobileRender,
};

const ProfileMenu: FunctionComponent = () => (
  <RenderByLayout options={renderMap} />
);

export default ProfileMenu;

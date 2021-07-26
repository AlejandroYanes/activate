import { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Modals } from 'components/modals';
import { useAuthData } from 'components/providers/Auth';
import Avatar from 'components/base-components/Avatar';
import { Menu, MenuItem } from 'components/base-components/Menu';
import FlexBox from '../../base-components/FlexBox';
import { Text } from '../../base-components/Typography';

const MenuTrigger = ({ toggleMenu, avatar }) => (
  <Avatar size="small" src={avatar} onClick={toggleMenu} />
);

const ProfileMenu: FunctionComponent = () => {
  const { push } = useHistory();
  const { userInfo: { avatar } } = useAuthData();

  const openProfile = useCallback(() => {
    push(Modals.PROFILE);
  }, []);

  const openTalks = useCallback(() => {
    push(Modals.TALKS);
  }, []);

  const openUpdates = useCallback(() => {
    push(Modals.UPDATES);
  }, []);

  const openSettings = useCallback(() => {
    push(Modals.SETTINGS);
  }, []);

  return (
    <Menu trigger={MenuTrigger} avatar={avatar}>
      <FlexBox padding="0 16px" height={48} justify="center" align="center" ellipsis>
        <Text weight="bold" align="center" ellipsis>Go to</Text>
      </FlexBox>
      <MenuItem label="Talks" onClick={openTalks} />
      <MenuItem label="Updates" onClick={openUpdates} />
      <MenuItem label="Profile" onClick={openProfile} />
      <MenuItem label="Settings" onClick={openSettings} />
    </Menu>
  );
};

export default ProfileMenu;

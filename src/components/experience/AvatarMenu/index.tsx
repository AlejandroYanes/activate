import React, { FunctionComponent } from 'react';
import MenuItem from 'components/base-components/Menu/MenuItem';
import Menu from 'components/base-components/Menu';
import SvgIcon from 'components/base-components/SvgIcon';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import MenuTrigger from './MenuTrigger';

interface Props {
  onShowProfile: () => void;
}

const AvatarMenu: FunctionComponent<Props> = (props) => {
  const { onShowProfile } = props;

  return (
    <Menu align="end" trigger={MenuTrigger} label="Scarlett">
      <MenuItem label="Let's see me" icon={<SvgIcon icon={Icons.USER} />} onClick={onShowProfile} />
      <MenuItem label="I'm out" icon={<SvgIcon icon={Icons.LOGOUT} />} />
    </Menu>
  );
};

export default AvatarMenu;

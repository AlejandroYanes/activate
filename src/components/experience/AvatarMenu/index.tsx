import React, { FunctionComponent } from 'react';
import MenuItem from '../../basse-components/Menu/MenuItem';
import Menu from '../../basse-components/Menu';
import SvgIcon from '../../basse-components/SvgIcon';
import { Icons } from '../../basse-components/SvgIcon/Icons';
import MenuTrigger from './MenuTrigger';
import './styles.scss';

const AvatarMenu: FunctionComponent = () => {
  return (
    <Menu align="end" trigger={MenuTrigger} label="Scarlett">
      <MenuItem label="Let's see me" icon={<SvgIcon icon={Icons.USER} />} />
      <MenuItem label="I'm out" icon={<SvgIcon icon={Icons.LOGOUT} />} />
    </Menu>
  );
};

export default AvatarMenu;

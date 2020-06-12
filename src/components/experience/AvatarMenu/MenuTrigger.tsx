import React from 'react';
import classnames from 'classnames';
import Avatar from '../../basse-components/Avatar';
import SvgIcon from '../../basse-components/SvgIcon';
import { Colors } from '../../basse-components/SvgIcon/colors';
import { Icons } from '../../basse-components/SvgIcon/Icons';

const MenuTrigger = (props) => {
  const { isOpen, toggleMenu, label } = props;
  const menuTriggerClassName = classnames('avatar-menu__trigger', { 'is-open': isOpen });

  return (
    <div className={menuTriggerClassName} onClick={toggleMenu}>
      <Avatar size="x-small" icon="user10" />
      <span className="avatar-menu__trigger__user">{label}</span>
      <SvgIcon icon={isOpen ? Icons.CHEVRON_UP : Icons.CHEVRON_DOWN} size="small" strokeColor={Colors.DARK} />
    </div>
  );
};

export default MenuTrigger;

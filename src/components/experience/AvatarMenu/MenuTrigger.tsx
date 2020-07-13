import React from 'react';
import Colors from 'styles/colors';
import Avatar from 'components/base-components/Avatar';
import SvgIcon from 'components/base-components/SvgIcon';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import Button from 'components/base-components/Button';

const MenuTrigger = (props) => {
  const { isOpen, toggleMenu, label } = props;
  const icon = (
    <SvgIcon
      icon={isOpen ? Icons.CHEVRON_UP : Icons.CHEVRON_DOWN}
      size="small"
      strokeColor={Colors.BRAND}
    />
  );

  return (
    <Button
      variant="base"
      color="brand"
      onClick={toggleMenu}
      label={label}
      leftIcon={<Avatar size="x-small" icon="user10" />}
      rightIcon={icon}
    />
  );
};

export default MenuTrigger;

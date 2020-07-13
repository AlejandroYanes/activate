import React, { FunctionComponent } from 'react';
import SvgIcon from '../SvgIcon';
import RenderIf from '../RenderIf';
import { Icons } from '../SvgIcon/Icons';
import { MenuItem as StyledMenuItem, MenuItemIcon, MenuItemLabel } from './styled';

interface Props {
  label: string;
  icon?: JSX.Element | Icons;
  onClick?: (event) => void;
}

const MenuItem: FunctionComponent<Props> = (props) => {
  const { label, icon, onClick } = props;
  const itemIcon = icon && typeof icon === 'string'
    ? <MenuItemIcon as={SvgIcon} icon={icon} />
    : <MenuItemIcon>{icon}</MenuItemIcon>;

  return (
    <StyledMenuItem onClick={onClick}>
      <RenderIf condition={!!icon}>
        {itemIcon}
      </RenderIf>
      <MenuItemLabel>
        <span>{label}</span>
      </MenuItemLabel>
    </StyledMenuItem>
  );
};

export default MenuItem;

import React, { FunctionComponent, useCallback, useMemo } from 'react';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import {
  MenuItem as StyledMenuItem,
  MenuItemIcon,
  MenuItemLabel,
} from './styled/menu-item';
import { useMenuContext } from './context';

interface Props {
  id?: string;
  label: string;
  icon?: JSX.Element | Icons;
  onClick: (event) => void;
  warning?: boolean;
  danger?: boolean;
}

const MenuItem: FunctionComponent<Props> = (props) => {
  const { closeMenu } = useMenuContext();
  const { id, label, icon, warning, danger, onClick } = props;

  const handleClick = useCallback((event) => {
    onClick(event);
    closeMenu();
  }, [onClick, closeMenu]);

  const itemIcon = useMemo(() => (
    icon && typeof icon === 'string'
      ? <MenuItemIcon as={SvgIcon} icon={icon} />
      : <MenuItemIcon>{icon}</MenuItemIcon>
  ), [icon]);

  return (
    <StyledMenuItem
      data-el="menu-item"
      data-id={id}
      role="button"
      warning={warning}
      danger={danger}
      onClick={handleClick}
    >
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

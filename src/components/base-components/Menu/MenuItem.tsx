import React, { FunctionComponent, useCallback, useMemo } from 'react';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { MenuItem as StyledMenuItem, MenuItemIcon, MenuItemLabel } from './styled/menu-item';
import { useMenuContext } from './context';

interface Props {
  label: string;
  icon?: JSX.Element | Icons;
  onClick: (event) => void;
}

const MenuItem: FunctionComponent<Props> = (props) => {
  const { closeMenu } = useMenuContext();
  const { label, icon, onClick } = props;

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
    <StyledMenuItem role="button" onClick={handleClick}>
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

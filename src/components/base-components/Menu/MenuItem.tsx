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
  onClick: (event) => void;
  warning?: boolean;
  danger?: boolean;
}

const MenuItem: FunctionComponent<Props> = (props) => {
  const { closeMenu } = useMenuContext();
  const { id, label, warning, danger, onClick } = props;

  const handleClick = useCallback((event) => {
    onClick(event);
    closeMenu();
  }, [onClick, closeMenu]);

  return (
    <StyledMenuItem
      data-el="menu-item"
      data-id={id}
      role="button"
      warning={warning}
      danger={danger}
      onClick={handleClick}
    >
      <MenuItemLabel>
        <span>{label}</span>
      </MenuItemLabel>
    </StyledMenuItem>
  );
};

export default MenuItem;

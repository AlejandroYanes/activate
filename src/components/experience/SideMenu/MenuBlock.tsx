import React, { FunctionComponent, ReactNode } from 'react';
import { Block, Label, StyledLink, StyledBubble } from './styled';

interface MenuBlockProps {
  label: ReactNode | ((isSelected: boolean) => ReactNode);
  path?: string;
  currentPath?: string;
  onClick?: (event) => void;
}

const MenuBlock: FunctionComponent<MenuBlockProps> = (props) => {
  const { label, path, currentPath, onClick } = props;
  const isSelected = path === currentPath;

  const labelComponent = typeof label === 'function'
    ? label(isSelected)
    : label;

  return (
    <Block>
      <StyledLink to={path} onClick={onClick}>
        <StyledBubble selected={isSelected} />
        <Label selected={isSelected}>{labelComponent}</Label>
      </StyledLink>
    </Block>
  );
};

export default MenuBlock;

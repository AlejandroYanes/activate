import React, { FunctionComponent, ReactNode } from 'react';
import { ColorScheme } from 'styles/colors';
import { useAppTheme } from 'components/providers/Theme';
import { Block, Label, StyledLink, StyledBubble } from './styled';

interface MenuBlockProps {
  icon: ReactNode | ((isSelected: boolean, theme: ColorScheme) => ReactNode);
  path?: string;
  currentPath?: string;
  onClick?: (event) => void;
}

const MenuBlock: FunctionComponent<MenuBlockProps> = (props) => {
  const { icon, path, currentPath, onClick } = props;
  const { colors } = useAppTheme();
  const isSelected = path === currentPath;

  const labelComponent = typeof icon === 'function'
    ? icon(isSelected, colors)
    : icon;

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

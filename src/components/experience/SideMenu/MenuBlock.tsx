import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { ColorScheme } from 'styles/colors';
import { useAppTheme } from 'components/providers/Theme';
import { Block, Label, StyledLink, StyledBubble } from './styled';

interface MenuBlockProps {
  icon: ReactNode | ((isSelected: boolean, theme: ColorScheme, useDarkStyle: boolean) => ReactNode);
  path?: string;
  currentPath?: string;
}

const MenuBlock: FunctionComponent<MenuBlockProps> = (props) => {
  const { icon, path, currentPath } = props;
  const { colors, useDarkStyle } = useAppTheme();
  const isSelected = path === currentPath;

  const labelComponent = useMemo(() => (
    typeof icon === 'function'
      ? icon(isSelected, colors, useDarkStyle)
      : icon
  ), [icon, isSelected, colors, useDarkStyle]);

  return (
    <Block>
      <StyledLink to={path}>
        <StyledBubble selected={isSelected} />
        <Label>{labelComponent}</Label>
      </StyledLink>
    </Block>
  );
};

export default MenuBlock;

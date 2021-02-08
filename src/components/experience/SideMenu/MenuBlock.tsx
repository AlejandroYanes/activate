import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { ColorScheme } from 'styles/colors';
import { useAppTheme } from 'components/providers/Theme';
import { Layout } from 'components/providers/Layout';
import { Block, Label, StyledLink, StyledBubble } from './styled';

interface MenuBlockProps {
  icon: ReactNode | ((isSelected: boolean, theme: ColorScheme, useDarkStyle: boolean) => ReactNode);
  path?: string;
  currentPath?: string;
  layout: Layout;
}

const MenuBlock: FunctionComponent<MenuBlockProps> = (props) => {
  const { colors, useDarkStyle } = useAppTheme();
  const { icon, path, currentPath, layout } = props;
  const isSelected = path === currentPath;

  const labelComponent = useMemo(() => (
    typeof icon === 'function'
      ? icon(isSelected, colors, useDarkStyle)
      : icon
  ), [icon, isSelected, colors, useDarkStyle]);

  return (
    <Block>
      <StyledLink to={path}>
        <StyledBubble layout={layout} selected={isSelected} />
        <Label>{labelComponent}</Label>
      </StyledLink>
    </Block>
  );
};

export default MenuBlock;

import React, { FunctionComponent, ReactNode } from 'react';
import { useAppTheme } from 'components/providers/Theme';
import { Layout } from 'components/providers/Layout';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { Block, Label, StyledBubble, StyledLink } from './styled';

interface MenuBlockProps {
  icon: Icons | ReactNode;
  path?: string;
  currentPath?: string;
  layout: Layout;
}

const MenuBlock: FunctionComponent<MenuBlockProps> = (props) => {
  const { colors, useDarkStyle } = useAppTheme();
  const { icon, path, currentPath, layout } = props;
  const isSelected = path === currentPath;

  return (
    <Block>
      <StyledLink to={path}>
        <StyledBubble layout={layout} selected={isSelected} />
        <Label>
          <RenderIf condition={typeof icon === 'string'} fallback={icon}>
            <SvgIcon
              icon={icon as Icons}
              color={isSelected && !useDarkStyle ? colors.BRAND : colors.WHITE}
            />
          </RenderIf>
        </Label>
      </StyledLink>
    </Block>
  );
};

export default MenuBlock;

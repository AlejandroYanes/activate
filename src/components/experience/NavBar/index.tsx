import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppColors, useAppTheme } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import MenuBlock from './MenuBlock';
import {
  ActionBlock,
  ActionButton,
  EmptyBlock,
  MenuList,
  SideMenu as StyledSideMenu,
} from './styled';

const VerticalMenu: FunctionComponent = () => {
  const layout = useAppLayout();
  const Colors = useAppColors();
  const { pathname } = useLocation();
  const { useDarkStyle, toggleLightStyle } = useAppTheme();

  return (
    <StyledSideMenu layout={layout}>
      <MenuList>
        <ActionBlock>
          <ActionButton
            onClick={toggleLightStyle}
            icon={useDarkStyle ? Icons.MOON : Icons.SUN}
            color={Colors.WHITE}
            buttonColor="brand"
            variant="fill"
          />
        </ActionBlock>
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/app/profile"
          icon={<Avatar src="user3" size="x-small" />}
        />
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/app"
          icon={Icons.BOOKMARKS}
        />
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/app/discover"
          icon={Icons.COMPASS}
        />
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/app/search"
          icon={Icons.SEARCH}
        />
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/app/talks"
          icon={Icons.MESSAGE}
        />
        <RenderIf condition={layout !== Layout.DESKTOP}>
          <MenuBlock
            layout={layout}
            currentPath={pathname}
            path="#updates"
            icon={Icons.TIME_HISTORY}
          />
        </RenderIf>
        <EmptyBlock />
      </MenuList>
    </StyledSideMenu>
  );
};

export default VerticalMenu;

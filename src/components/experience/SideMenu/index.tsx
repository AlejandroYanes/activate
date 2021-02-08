import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppColors, useAppTheme } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import MenuBlock from './MenuBlock';
import { aboutIcon, discoverIcon, homeIcon, searchIcon } from './icons';
import { ActionBlock, ActionButton, EmptyBlock, MenuList, SideMenu as StyledSideMenu } from './styled';
import RenderIf from '../../base-components/RenderIf';

const emptyAction = () => undefined;

const SideMenu: FunctionComponent = () => {
  const layout = useAppLayout();
  const Colors = useAppColors();
  const { pathname } = useLocation();
  const { useDarkStyle, toggleLightStyle } = useAppTheme();

  return (
    <StyledSideMenu layout={layout}>
      <MenuList layout={layout}>
        <RenderIf condition={layout !== Layout.SMALL}>
          <ActionBlock>
            <ActionButton
              onClick={toggleLightStyle}
              icon={useDarkStyle ? Icons.MOON : Icons.SUN}
              color={Colors.WHITE}
              buttonColor="brand"
              variant="fill"
            />
          </ActionBlock>
        </RenderIf>
        <RenderIf condition={layout === Layout.SMALL}>
          <EmptyBlock />
        </RenderIf>
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/profile"
          icon={<Avatar icon="user2" size="x-small" />}
        />
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/"
          icon={homeIcon}
        />
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/discover"
          icon={discoverIcon}
        />
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/search"
          icon={searchIcon}
        />
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/about"
          icon={aboutIcon}
        />
        <EmptyBlock />
        <RenderIf condition={layout !== Layout.SMALL}>
          <ActionBlock>
            <ActionButton
              onClick={emptyAction}
              icon={Icons.LOGOUT}
              color={Colors.WHITE}
              secondaryColor={Colors.WHITE}
              buttonColor="brand"
              variant="fill"
            />
          </ActionBlock>
        </RenderIf>
      </MenuList>
    </StyledSideMenu>
  );
};

export default SideMenu;

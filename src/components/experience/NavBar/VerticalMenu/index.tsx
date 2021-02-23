import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppColors, useAppTheme } from 'components/providers/Theme';
import { useAppLayout } from 'components/providers/Layout';
import { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import MenuBlock from './MenuBlock';
import {
  discoverIcon,
  bookmarksIcon,
  searchIcon,
  messageIcon,
} from './icons';
import {
  ActionBlock,
  ActionButton,
  EmptyBlock,
  MenuList,
  SideMenu as StyledSideMenu,
} from './styled';

const emptyAction = () => undefined;

const VerticalMenu: FunctionComponent = () => {
  const layout = useAppLayout();
  const Colors = useAppColors();
  const { pathname } = useLocation();
  const { useDarkStyle, toggleLightStyle } = useAppTheme();

  return (
    <StyledSideMenu>
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
          path="/profile"
          icon={<Avatar icon="user2" size="x-small" />}
        />
        <MenuBlock
          layout={layout}
          currentPath={pathname}
          path="/upcoming"
          icon={bookmarksIcon}
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
          path="/talks"
          icon={messageIcon}
        />
        <EmptyBlock />
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
      </MenuList>
    </StyledSideMenu>
  );
};

export default VerticalMenu;

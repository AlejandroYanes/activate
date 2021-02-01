import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Colors from 'styles/colors';
import { useAppTheme } from 'components/providers/Theme';
import Avatar from 'components/base-components/Avatar';
import { Icons } from 'components/base-components/SvgIcon';
import MenuBlock from './MenuBlock';
import { aboutIcon, discoverIcon, homeIcon } from './icons';
import {
  ActionBlock,
  ActionButton,
  EmptyBlock,
  MenuList,
  SideMenu as StyledSideMenu,
} from './styled';

const emptyAction = () => undefined;

const SideMenu: FunctionComponent = () => {
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
        <EmptyBlock />
        <MenuBlock
          currentPath={pathname}
          path="/profile"
          icon={<Avatar icon="user2" size="x-small" />}
        />
        <MenuBlock
          currentPath={pathname}
          path="/"
          icon={homeIcon}
        />
        <MenuBlock
          currentPath={pathname}
          path="/discover"
          icon={discoverIcon}
        />
        <MenuBlock
          currentPath={pathname}
          path="/about"
          icon={aboutIcon}
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

export default SideMenu;

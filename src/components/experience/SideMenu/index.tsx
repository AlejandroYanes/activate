import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from 'components/base-components/Avatar';
import { EmptyBlock, MenuList, SideMenu as StyledSideMenu } from './styled';
import { aboutIcon, discoverIcon, homeIcon } from './icons';
import MenuBlock from './MenuBlock';

const SideMenu: FunctionComponent = () => {
  const { pathname } = useLocation();

  return (
    <StyledSideMenu>
      <MenuList>
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
      </MenuList>
    </StyledSideMenu>
  );
};

export default SideMenu;

import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from 'components/base-components/Avatar';
import { EmptyBlock, MenuList, SideMenu as StyledSideMenu } from './styled';
import { aboutIcon, discoverIcon, homeIcon, publishersIcon } from './icons';
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
          label={<Avatar icon="user10" size="x-small" />}
        />
        <MenuBlock
          currentPath={pathname}
          path="/"
          label={homeIcon}
        />
        <MenuBlock
          currentPath={pathname}
          path="/discover"
          label={discoverIcon}
        />
        <MenuBlock
          currentPath={pathname}
          path="/publishers"
          label={publishersIcon}
        />
        <MenuBlock
          currentPath={pathname}
          path="/about"
          label={aboutIcon}
        />
        <EmptyBlock />
      </MenuList>
    </StyledSideMenu>
  );
};

export default SideMenu;

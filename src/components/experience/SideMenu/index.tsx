import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Colors from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import { EmptyBlock, MenuList, SideMenu as StyledSideMenu } from './styled';
import MenuBlock from './MenuBlock';

const homeIcon = (isSelected) => (
  <SvgIcon
    icon={Icons.HOME}
    fillColor={isSelected ? Colors.BRAND : Colors.WHITE}
  />
);

const discoverIcon = (isSelected) => (
  <SvgIcon
    icon={Icons.COMPASS}
    strokeColor={isSelected ? Colors.BRAND : Colors.WHITE}
  />
);

const aboutIcon = (isSelected) => (
  <SvgIcon
    icon={Icons.INFO_CIRCLE}
    strokeColor={isSelected ? Colors.BRAND : Colors.WHITE}
    fillColor={isSelected ? Colors.LIGHT_GRAY : Colors.BRAND}
  />
);

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
          path="/about"
          label={aboutIcon}
        />
        <EmptyBlock />
      </MenuList>
    </StyledSideMenu>
  );
};

export default SideMenu;

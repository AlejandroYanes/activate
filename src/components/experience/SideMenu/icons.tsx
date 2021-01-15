import React from 'react';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Colors from 'styles/colors';

export const homeIcon = (isSelected) => (
  <SvgIcon
    icon={Icons.BOOKMARKS}
    color={isSelected ? Colors.BRAND : Colors.WHITE}
  />
);

export const discoverIcon = (isSelected) => (
  <SvgIcon
    icon={Icons.COMPASS}
    color={isSelected ? Colors.BRAND : Colors.WHITE}
  />
);

export const aboutIcon = (isSelected) => (
  <SvgIcon
    icon={Icons.INFO_CIRCLE}
    color={isSelected ? Colors.LIGHT_GRAY : Colors.BRAND}
    secondaryColor={isSelected ? Colors.BRAND : Colors.WHITE}
  />
);

export const publishersIcon = (isSelected) => (
  <SvgIcon
    icon={Icons.MEGAPHONE}
    color={isSelected ? Colors.BRAND : Colors.WHITE}
  />
);

import React from 'react';
import { ColorScheme } from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

export const homeIcon = (isSelected: boolean, theme: ColorScheme) => (
  <SvgIcon
    icon={Icons.BOOKMARKS}
    color={isSelected ? theme.BRAND : theme.WHITE}
  />
);

export const discoverIcon = (isSelected: boolean, theme: ColorScheme) => (
  <SvgIcon
    icon={Icons.COMPASS}
    color={isSelected ? theme.BRAND : theme.WHITE}
  />
);

export const aboutIcon = (isSelected: boolean, theme: ColorScheme) => (
  <SvgIcon
    icon={Icons.INFO_CIRCLE}
    color={isSelected ? theme.BACKGROUND : theme.BRAND}
    secondaryColor={isSelected ? theme.BRAND : theme.WHITE}
  />
);

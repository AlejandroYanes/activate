import React from 'react';
import { ColorScheme } from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

export const homeIcon = (isSelected: boolean, theme: ColorScheme, useDarkStyle: boolean) => (
  <SvgIcon
    icon={Icons.BOOKMARKS}
    color={isSelected && !useDarkStyle ? theme.BRAND : theme.WHITE}
  />
);

export const discoverIcon = (isSelected: boolean, theme: ColorScheme, useDarkStyle: boolean) => (
  <SvgIcon
    icon={Icons.COMPASS}
    color={isSelected && !useDarkStyle ? theme.BRAND : theme.WHITE}
  />
);

export const searchIcon = (isSelected: boolean, theme: ColorScheme, useDarkStyle: boolean) => (
  <SvgIcon
    icon={Icons.SEARCH}
    color={isSelected && !useDarkStyle ? theme.BRAND : theme.WHITE}
  />
);

export const aboutIcon = (isSelected: boolean, theme: ColorScheme, useDarkStyle: boolean) => (
  <SvgIcon
    icon={Icons.INFO_CIRCLE}
    color={isSelected ? theme.BACKGROUND : theme.BRAND}
    secondaryColor={isSelected && !useDarkStyle ? theme.BRAND : theme.WHITE}
  />
);

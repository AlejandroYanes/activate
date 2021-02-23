import React from 'react';
import { ColorScheme } from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

export const bookmarksIcon = (isSelected: boolean, theme: ColorScheme, useDarkStyle: boolean) => (
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

export const messageIcon = (isSelected: boolean, theme: ColorScheme, useDarkStyle: boolean) => (
  <SvgIcon
    icon={Icons.MESSAGE}
    color={isSelected && !useDarkStyle ? theme.BRAND : theme.WHITE}
  />
);


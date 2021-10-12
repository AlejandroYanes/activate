import React, { FunctionComponent, useMemo } from 'react';
import { basicColors, Palette } from 'styles/colors';
import {
  DuskLightsTheme,
  FruitsTheme,
  GrapesTheme,
  LifeIsABeachTheme,
  NeonLightsTheme,
  SummerVibesTheme,
} from 'styles/themes';
import RenderByLayout from 'components/base-components/RenderByLayout';
import Configuration, { Layout } from 'components/base-components/Configuration';
import { useAuthData } from 'components/providers/Auth';
import { MobileGlobalStyles, PrimaryGlobalStyles } from './GlobalStyles';

export enum AppTheme {
  Grapes = 'Grapes',
  NeonLights = 'NeonLights',
  SummerVibes = 'SummerVibes',
  LifeIsABeach = 'LifeIsABeach',
  DuskLights = 'DuskLights',
  Fruits = 'Fruits',
}

const themesMap = {
  [AppTheme.Grapes]: GrapesTheme,
  [AppTheme.NeonLights]: NeonLightsTheme,
  [AppTheme.SummerVibes]: SummerVibesTheme,
  [AppTheme.LifeIsABeach]: LifeIsABeachTheme,
  [AppTheme.DuskLights]: DuskLightsTheme,
  [AppTheme.Fruits]: FruitsTheme,
};

const globalStyles = {
  [Layout.DESKTOP]: PrimaryGlobalStyles,
  [Layout.TABLET]: PrimaryGlobalStyles,
  [Layout.MOBILE]: MobileGlobalStyles,
};

const ThemeProvider: FunctionComponent = (props) => {
  const { children } = props;
  const { userInfo } = useAuthData();
  const theme = userInfo?.theme || AppTheme.LifeIsABeach;
  const useDarkStyle = userInfo ? userInfo.useDarkStyle : false;

  const palette = useMemo(
    () => {
      const themeColors = themesMap[theme];
      const composition: Palette = {
        ...themeColors,
        ...basicColors,
        BACKGROUND: useDarkStyle ? '#1c1c1c' : '#ffffff',
      };
      return composition;
    },
    [theme, useDarkStyle],
  );

  return (
    <Configuration palette={palette}>
      <RenderByLayout
        options={globalStyles}
        fallback={PrimaryGlobalStyles}
      />
      {children}
    </Configuration>
  );
};

export default ThemeProvider;

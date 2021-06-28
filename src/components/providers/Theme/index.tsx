import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ColorScheme } from 'styles/colors';
import {
  DuskLightsTheme,
  LifeIsABeachTheme,
  NeonLightsTheme,
  GrapesTheme,
  SummerVibesTheme,
  FruitsTheme,
} from 'styles/themes';
import { composeColorScheme } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import RenderByLayout from 'components/base-components/RenderByLayout';
import { MobileGlobalStyles, PrimaryGlobalStyles } from './GlobalStyles';
import { useAuthActions, useAuthData } from '../Auth';

export enum AppTheme {
  Grapes = 'Grapes',
  NeonLights = 'NeonLights',
  SummerVibes = 'SummerVibes',
  LifeIsABeach = 'LifeIsABeach',
  DuskLights = 'DuskLights',
  Fruits = 'Fruits',
}

interface ThemeContextValue {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  useDarkStyle: boolean;
  toggleLightStyle: () => void;
  colors: ColorScheme;
  layout: Layout;
}

const themesMap = {
  [AppTheme.Grapes]: GrapesTheme,
  [AppTheme.NeonLights]: NeonLightsTheme,
  [AppTheme.SummerVibes]: SummerVibesTheme,
  [AppTheme.LifeIsABeach]: LifeIsABeachTheme,
  [AppTheme.DuskLights]: DuskLightsTheme,
  [AppTheme.Fruits]: FruitsTheme,
};

const ThemeContext = createContext<ThemeContextValue>(undefined);

const globalStyles = {
  [Layout.DESKTOP]: PrimaryGlobalStyles,
  [Layout.TABLET]: PrimaryGlobalStyles,
  [Layout.MOBILE]: MobileGlobalStyles,
};

const ThemeProvider: FunctionComponent = (props) => {
  const { children } = props;
  const layout = useAppLayout();
  const { userInfo } = useAuthData();
  const { updateUserInfo } = useAuthActions();
  const theme = userInfo?.theme || AppTheme.Fruits;
  const useDarkStyle = userInfo ? userInfo.useDarkStyle : false;

  const setTheme = useCallback((theme: AppTheme) => {
    updateUserInfo({ ...userInfo, theme });
  }, [userInfo]);

  const toggleLightStyle = useCallback(() => {
    updateUserInfo({
      ...userInfo,
      useDarkStyle: !userInfo.useDarkStyle,
    });
  }, [userInfo]);

  const themeProps = useMemo(
    () => {
      const themeColors = themesMap[theme];

      return {
        layout,
        useDarkStyle,
        colors: composeColorScheme(themeColors, useDarkStyle),
      };
    },
    [theme, useDarkStyle, layout],
  );

  const themeContextValue = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleLightStyle, ...themeProps }),
    [theme, themeProps, toggleLightStyle],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledThemeProvider theme={themeProps}>
        <RenderByLayout
          options={globalStyles}
          fallback={PrimaryGlobalStyles}
        />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
export const useAppColors = () => useContext(ThemeContext).colors;

export default ThemeProvider;

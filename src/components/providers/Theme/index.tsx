import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ColorScheme } from 'styles/colors';
import {
  DuskLightsTheme,
  LifeIsABeachTheme,
  NeonLightsTheme,
  GrapesTheme,
  SummerVibesTheme,
} from 'styles/themes';
import { composeColorScheme } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import RenderByLayout from 'components/base-components/RenderByLayout';
import { MobileGlobalStyles, PrimaryGlobalStyles } from './GlobalStyles';

export enum AppTheme {
  Grapes = 'Grapes',
  NeonLights = 'NeonLights',
  SummerVibes = 'SummerVibes',
  LifeIsABeach = 'LifeIsABeach',
  DuskLights = 'DuskLights',
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
};

const ThemeContext = createContext<ThemeContextValue>(undefined);

const globalStyles = {
  [Layout.DESKTOP]: PrimaryGlobalStyles,
  [Layout.TABLET]: PrimaryGlobalStyles,
  [Layout.MOBILE]: MobileGlobalStyles,
};

const ThemeProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<AppTheme>(AppTheme.NeonLights);
  const [useDarkStyle, setUseDarkTheme] = useState(true);
  const layout = useAppLayout();

  const toggleLightStyle = useCallback(
    () => setUseDarkTheme((oldState) => !oldState),
    [],
  );

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

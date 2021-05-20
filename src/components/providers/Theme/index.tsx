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
import { Layout } from 'components/providers/Layout';
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

  const toggleLightStyle = useCallback(
    () => setUseDarkTheme((oldState) => !oldState),
    [],
  );

  const themeColors = useMemo(
    () => {
      const themeColors = themesMap[theme];

      return {
        useDarkStyle,
        colors: composeColorScheme(themeColors, useDarkStyle),
      };
    },
    [theme, useDarkStyle],
  );

  const themeContextValue = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleLightStyle, ...themeColors }),
    [theme, themeColors, toggleLightStyle],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledThemeProvider theme={themeColors}>
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

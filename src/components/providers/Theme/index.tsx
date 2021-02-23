import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { basicColors, ColorScheme, darkStyleColors, lightStyleColors } from 'styles/colors';
import {
  NeonLightsTheme,
  StartingTheme,
  SummerVibesTheme,
  MidnightLightsTheme,
  LifeIsABeachTheme,
} from 'styles/themes';
import { GlobalStyles } from './GlobalStyles';

export enum AppTheme {
  Default = 'Default',
  NeonLights = 'NeonLights',
  SummerVibes = 'SummerVibes',
  MidnightLights = 'MidnightLights',
  LifeIsABeach = 'LifeIsABeach',
}

interface ThemeContextValue {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  useDarkStyle: boolean;
  toggleLightStyle: () => void;
  colors: ColorScheme;
}

const themesMap = {
  [AppTheme.Default]: StartingTheme,
  [AppTheme.NeonLights]: NeonLightsTheme,
  [AppTheme.SummerVibes]: SummerVibesTheme,
  [AppTheme.MidnightLights]: MidnightLightsTheme,
  [AppTheme.LifeIsABeach]: LifeIsABeachTheme,
};

const ThemeContext = createContext<ThemeContextValue>(undefined);

const ThemeProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<AppTheme>(AppTheme.Default);
  const [useDarkStyle, setUseDarkTheme] = useState(false);

  const toggleLightStyle = useCallback(
    () => setUseDarkTheme((oldState) => !oldState),
    [],
  );

  const themeColors = useMemo(
    () => ({
      useDarkStyle,
      colors: {
        ...basicColors,
        ...(useDarkStyle ? darkStyleColors : lightStyleColors),
        ...themesMap[theme],
      },
    }),
    [theme, useDarkStyle],
  );

  const themeContextValue = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleLightStyle, ...themeColors }),
    [theme, themeColors, toggleLightStyle],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledThemeProvider theme={themeColors}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
export const useAppColors = () => useContext(ThemeContext).colors;

export default ThemeProvider;

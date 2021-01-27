import React, { createContext, FunctionComponent, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { basicColors, ColorScheme, darkThemeColors, lightThemeColors } from 'styles/colors';
import { NeonLightsTheme, StartingTheme, SummerVibesTheme } from 'styles/themes';

export enum AppTheme {
  Default = 'Default',
  NeonLights = 'NeonLights',
  SummerVibes = 'SummerVibes',
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
};

const ThemeContext = createContext<ThemeContextValue>(undefined);

const ThemeProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<AppTheme>(AppTheme.SummerVibes);
  const [useDarkStyle, setUseDarkTheme] = useState(true);

  const toggleLightStyle = useCallback(
    () => setUseDarkTheme((oldState) => !oldState),
    [],
  );

  const themeColors = useMemo(
    () => ({
      useDarkStyle,
      colors: {
        ...basicColors,
        ...(useDarkStyle ? darkThemeColors : lightThemeColors),
        ...themesMap[theme],
      },
    }),
    [theme, useDarkStyle],
  );

  const themeContextValue = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleLightStyle, ...themeColors }),
    [theme, themeColors, useDarkStyle, toggleLightStyle],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledThemeProvider theme={themeColors}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
export const useAppColors = () => useContext(ThemeContext).colors;

export default ThemeProvider;

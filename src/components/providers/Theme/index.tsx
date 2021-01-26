import React, { createContext, FunctionComponent, useContext, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { basicColors, ColorScheme } from 'styles/colors';
import { NeonLightsTheme, StartingTheme, SummerVibesTheme } from 'styles/themes';

export enum AppTheme {
  Default = 'Default',
  NeonLights = 'NeonLights',
  SummerVibes = 'SummerVibes',
}

interface ThemeContextValue {
  colors: ColorScheme;
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
}

const themesMap = {
  [AppTheme.Default]: StartingTheme,
  [AppTheme.NeonLights]: NeonLightsTheme,
  [AppTheme.SummerVibes]: SummerVibesTheme,
};

const ThemeContext = createContext<ThemeContextValue>(undefined);

const ThemeProvider: FunctionComponent = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<AppTheme>(AppTheme.Default);

  const themeColors = useMemo(() => ({ ...basicColors, ...themesMap[theme] }), [theme]);

  const themeContextValue = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, colors: themeColors }),
    [theme, themeColors],
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

export default ThemeProvider;

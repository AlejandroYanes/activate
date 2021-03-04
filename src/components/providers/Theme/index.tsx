import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ColorScheme} from 'styles/colors';
import {
  NeonLightsTheme,
  StartingTheme,
  SummerVibesTheme,
  DuskLightsTheme,
  LifeIsABeachTheme,
} from 'styles/themes';
import { GlobalStyles } from './GlobalStyles';
import composeColorScheme from './compose-color-scheme';

export enum AppTheme {
  Default = 'Default',
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
  [AppTheme.Default]: StartingTheme,
  [AppTheme.NeonLights]: NeonLightsTheme,
  [AppTheme.SummerVibes]: SummerVibesTheme,
  [AppTheme.LifeIsABeach]: LifeIsABeachTheme,
  [AppTheme.DuskLights]: DuskLightsTheme,
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
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
export const useAppColors = () => useContext(ThemeContext).colors;

export default ThemeProvider;

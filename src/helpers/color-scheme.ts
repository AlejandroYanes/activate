import {
  balanceBgColorRatio,
  balanceColorRatio,
  changeColorLight,
  getShade,
} from 'helpers';
import { colorVariation } from 'styles/variables';
import {
  ColorScheme,
  basicColors,
  fixedColors,
  darkStyleColors,
  lightStyleColors,
} from 'styles/colors';

function expandColors(colors, lightColors, useDarkStyle) {
  const { BACKGROUND, BACKGROUND_LIGHTER } = lightColors;

  return Object.keys(colors).reduce((acc, color) => {
    const colorValue = colors[color];
    const colorFactor = useDarkStyle ? colorVariation : -colorVariation;
    const balancedColor = useDarkStyle
      ? balanceColorRatio(colorValue, BACKGROUND, 5.5)
      : balanceColorRatio(colorValue, BACKGROUND_LIGHTER, 5.5);
    const balancedBgColor = useDarkStyle
      ? balanceBgColorRatio(BACKGROUND_LIGHTER, colorValue, 5.5)
      : balanceBgColorRatio(BACKGROUND, colorValue, 5.5);

    return {
      ...acc,
      [color]: colorValue,
      [`${color}_HIGHLIGHT`]: changeColorLight(colorValue, colorFactor),
      [`${color}_BG`]: balancedBgColor,
      [`${color}_BG_HIGHLIGHT`]: changeColorLight(balancedBgColor, colorFactor),
      [`${color}_FONT`]: balancedColor,
      [`${color}_FONT_HIGHLIGHT`]: changeColorLight(balancedColor, colorFactor),
      [`${color}_SHADE`]: getShade(colorValue),
    };
  }, {} as ColorScheme);
}

export function composeColorScheme(theme, useDarkStyle): ColorScheme {
  const lightColors = useDarkStyle ? darkStyleColors : lightStyleColors;

  const expandedColors = expandColors(
    { ...theme, ...basicColors },
    lightColors,
    useDarkStyle,
  );

  return {
    ...expandedColors,
    ...fixedColors,
    ...lightColors
  };
}

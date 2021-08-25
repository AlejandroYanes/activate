import {
  changeColorLight,
  getBrightness,
  getContrastRatio,
  getShade,
} from 'helpers';
import { colorVariation } from 'styles/variables';
import {
  basicColors,
  ColorScheme,
  darkStyleColors,
  fixedColors,
  lightStyleColors
} from '../styles/colors';

function getColorFactor(color: string) {
  return getBrightness(color) > 128
    ? -0.01
    : 0.01;
}

export function balanceColorRatio(
  color: string,
  background: string,
  targetRatio = 5,
): string {
  const colorChangeFactor = getColorFactor(background);
  let balancedColor = color;
  let ratio = getContrastRatio(balancedColor, background);

  while(ratio < targetRatio) {
    balancedColor = changeColorLight(balancedColor, colorChangeFactor);
    ratio = getContrastRatio(balancedColor, background);
  }

  return balancedColor;
}

export function balanceBgColorRatio(
  color: string,
  background: string,
  targetRatio = 4.5,
): string {
  const colorChangeFactor = getColorFactor(color);
  let balancedColor = background;
  let ratio = getContrastRatio(color, balancedColor);

  while(ratio < targetRatio) {
    balancedColor = changeColorLight(balancedColor, colorChangeFactor);
    ratio = getContrastRatio(color, balancedColor);
  }

  return balancedColor;
}

function expandColors(colors, lightColors, useDarkStyle) {
  const { BACKGROUND, BACKGROUND_LIGHTER } = lightColors;

  return Object.keys(colors).reduce((acc, color) => {
    const colorValue = colors[color];
    const colorFactor = useDarkStyle ? colorVariation : -colorVariation;
    const balancedColor = useDarkStyle
      ? balanceColorRatio(colorValue, BACKGROUND)
      : balanceColorRatio(colorValue, BACKGROUND_LIGHTER);
    const balancedBgColor = useDarkStyle
      ? balanceBgColorRatio(BACKGROUND_LIGHTER, colorValue, 5.5)
      : colorValue

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

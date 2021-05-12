import { balanceColorRatio, changeColorLight, getShade } from 'helpers';
import { colorVariation } from 'styles/variables';
import {
  ColorScheme,
  basicColors,
  fixedColors,
  darkStyleColors,
  lightStyleColors,
} from 'styles/colors';

function expandColors(colors, lightColors, useDarkStyle: boolean) {
  const { BACKGROUND } = lightColors;
  
  return Object.keys(colors).reduce((acc, color) => {
    const colorValue = colors[color];
    const colorFactor = useDarkStyle ? colorVariation : -colorVariation;
    const balancedColor = balanceColorRatio(colorValue, BACKGROUND);

    return {
      ...acc,
      [color]: colorValue,
      [`${color}_HIGHLIGHT`]: changeColorLight(colorValue, -colorVariation),
      [`${color}_FONT`]: balancedColor,
      [`${color}_FONT_HIGHLIGHT`]: changeColorLight(balancedColor, colorFactor),
      [`${color}_SHADE`]: getShade(colorValue),
    };
  }, {} as ColorScheme);
}

export default function composeColorScheme(theme, useDarkStyle): ColorScheme {
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

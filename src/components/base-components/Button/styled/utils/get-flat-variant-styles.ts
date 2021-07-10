import { css } from 'styled-components';
import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation, getFontShadeColor } from 'helpers';
import getBtnFontColor from './get-btn-font-color';

const getFontHoverColor = (colors: ColorScheme, color: string, useBaseColor: boolean) => {
  if (color === 'background') {
    return colors.FONT;
  }

  if (color === 'font') {
    return colors.BACKGROUND_LIGHTER;
  }

  const variant = useBaseColor ? Variations.HIGHLIGHT : Variations.FONT_HIGHLIGHT;
  return  getColorVariation(colors, color, variant);
}

const getBgHoverColor = (colors: ColorScheme, color: string) => {
  if (color === 'background') {
    return colors.BACKGROUND;
  }

  if (color === 'font') {
    return colors.GRAY_SHADE;
  }

  return  getColorVariation(colors, color, Variations.SHADE);
};

export default function getFlatVariantStyles(
  colors: ColorScheme,
  color: string,
  disabled: boolean,
  useBaseColor = false,
) {

  if (disabled) {
    return css`
      pointer-events: none;
      cursor: not-allowed;
      background-color: transparent;
      color: ${getFontShadeColor};

      & > svg > path {
        fill: ${getFontShadeColor};
      }
    `;
  }

  const fontColor = getBtnFontColor(colors, color, useBaseColor);
  const fontHoverColor = getFontHoverColor(colors, color, useBaseColor);
  const backgroundHoverColor = getBgHoverColor(colors, color);

  return css`
    background-color: transparent;
    color: ${fontColor};

    & > svg > path {
      fill: ${fontColor};
    }

    &:hover, &:focus {
      color: ${fontHoverColor};
      background-color: ${backgroundHoverColor};

      & > svg > path {
        fill: ${fontHoverColor};
      }
    }
  `;
}
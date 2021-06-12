import { css } from 'styled-components';
import { ColorScheme } from 'styles/colors';
import { getColorVariation, Variations } from 'helpers';
import getBtnFontColor from './get-btn-font-color';

const getFontHoverColor = (colors: ColorScheme, color: string, useBaseColor: boolean) => {
  if (color === 'background') {
    return colors.BRAND_FONT_HIGHLIGHT;
  }

  if (color === 'font') {
    return colors.BACKGROUND_LIGHTER;
  }

  const variant = useBaseColor ? Variations.BASE_HIGHLIGHT : Variations.FONT_HIGHLIGHT;
  return  getColorVariation(colors, color, variant);
}

export default function getTextVariantStyles(
  colors: ColorScheme,
  color: string,
  useBaseColor = false,
) {
  const fontColor = getBtnFontColor(colors, color, useBaseColor);
  const fontHoverColor = getFontHoverColor(colors, color, useBaseColor);

  return css`
    padding: 0;
    font-weight: bold;
    color: ${fontColor};
    background-color: transparent;

    & > svg > path {
      fill: ${fontColor};
    }

    &:hover, &:focus {
      color: ${fontHoverColor};

      & > svg > path {
        fill: ${fontHoverColor};
      }
    }
  `;
}

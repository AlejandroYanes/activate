import { css } from 'styled-components';
import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation } from 'helpers';
import getBtnFontColor from './get-btn-font-color';
import getBtnFontHoverColor from './get-btn-font-hover-color';


const getBgHoverColor = (colors: ColorScheme, color: string) => {
  if (color === 'background') {
    return colors.BACKGROUND;
  }

  if (color === 'font') {
    return colors.GRAY_SHADE;
  }

  return  getColorVariation(colors, color, Variations.SHADE);
};

export default function getOutlineVariantStyles(
  colors: ColorScheme,
  color: string,
  useBaseColor = false,
) {
  const fontColor = getBtnFontColor(colors, color, useBaseColor);
  const borderColor = getBtnFontColor(colors, color, useBaseColor);
  const fontHoverColor = getBtnFontHoverColor(colors, color, useBaseColor);
  const bgHoverColor = getBgHoverColor(colors, color);

  return css`
    color: ${fontColor};
    background-color: transparent;
    border: 1px solid ${borderColor};

    & > svg > path {
      fill: ${fontColor};
    }

    &:hover, &:focus {
      color: ${fontHoverColor};
      border-color: ${fontHoverColor};
      background-color: ${bgHoverColor};

      & > svg > path {
        fill: ${fontHoverColor};
      }
    }
  `;
}

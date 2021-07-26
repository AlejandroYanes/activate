import { css } from 'styled-components';
import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation, getFontShadeColor } from 'helpers';
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
  disabled: boolean,
) {

  if (disabled) {
    return css`
      pointer-events: none;
      cursor: default;
      color: ${getFontShadeColor};
      background-color: transparent;
      border: 1px solid ${getFontShadeColor};

      & > svg > path {
        fill: ${getFontShadeColor};
      }
    `;
  }

  const fontColor = getBtnFontColor(colors, color);
  const borderColor = getBtnFontColor(colors, color);
  const fontHoverColor = getBtnFontHoverColor(colors, color);
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

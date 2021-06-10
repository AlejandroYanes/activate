import { css } from 'styled-components';
import { ColorScheme } from 'styles/colors';

export default function getOutlineVariantStyles(colors: ColorScheme, color: string) {
  const colorInScheme = color.toUpperCase();
  const fontColor = color === 'background'
    ? colors.FONT
    : colors[`${colorInScheme}_FONT`];

  const borderColor = color === 'background'
    ? colors.FONT
    : colors[`${colorInScheme}_FONT`];

  const fontHoverColor = color === 'background'
    ? colors.FONT
    : colors[`${colorInScheme}_FONT_HIGHLIGHT`];

  const bgHoverColor = color === 'background'
    ? colors.FONT_SHADE
    : colors[`${colorInScheme}_SHADE`];

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

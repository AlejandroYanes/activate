import { css } from 'styled-components';
import { ColorScheme } from 'styles/colors';

export default function getTextVariantStyles(colors: ColorScheme, color: string) {
  const colorInScheme = color.toUpperCase();
  const fontColor = color === 'background'
    ? colors.FONT
    : colors[`${colorInScheme}_FONT`];
  const fontHoverColor = color === 'background'
    ? colors.BRAND_FONT_HIGHLIGHT
    : colors[`${colorInScheme}_FONT_HIGHLIGHT`];

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

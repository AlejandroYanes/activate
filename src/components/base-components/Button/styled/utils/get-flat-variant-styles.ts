import { css } from 'styled-components';
import { ColorScheme } from 'styles/colors';

export default function getFlatVariantStyles(colors: ColorScheme, color: string) {
  const colorInScheme = color.toUpperCase();
  const fontColor = (
    color === 'background'
      ? colors.FONT
      : colors[`${colorInScheme}_FONT`]
  );
  const fontHoverColor = (
    color === 'background'
      ? colors.FONT
      : colors[`${colorInScheme}_FONT_HIGHLIGHT`]
  );
  const backgroundHoverColor = (
    color === 'background'
      ? colors.BACKGROUND
      : colors[`${colorInScheme}_SHADE`]
  );

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

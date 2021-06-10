import { css } from 'styled-components';
import { ColorScheme } from 'styles/colors';

export default function getFillVariantStyles(colors: ColorScheme, color: string) {
  const fontColor = (
    color === 'background' ? colors.FONT : colors.BACKGROUND_LIGHTER
  );
  const fontHoverColor = (
    color === 'background'
      ? colors.BRAND_FONT_HIGHLIGHT
      : colors.BACKGROUND_LIGHTER
  );

  const backgroundColor = (
    color === 'background'
      ? colors.BACKGROUND
      : colors[`${color.toUpperCase()}_BG`]
  );
  const backgroundHoverColor = (
    color === 'background'
      ? colors.BRAND_SHADE
      : colors[`${color.toUpperCase()}_BG_HIGHLIGHT`]
  );

  return css`
    color: ${fontColor};
    background-color: ${backgroundColor};

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

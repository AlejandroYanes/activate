import { css } from 'styled-components';
import { ColorScheme } from 'styles/colors';
import { getFontSecColor, getFontShadeColor } from 'helpers';

export default function getFillVariantStyles(
  colors: ColorScheme,
  color: string,
  disabled?: boolean,
) {

  if (disabled) {
    return css`
      pointer-events: none;
      cursor: default;
      color: ${getFontSecColor};
      background-color: ${getFontShadeColor};

      & > svg > path {
        fill: ${getFontShadeColor};
      }
    `;
  }

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

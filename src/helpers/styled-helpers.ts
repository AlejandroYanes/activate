import { ColorScheme, Variations } from 'styles/colors';
import { PositionProps } from './common-props';

export function getPositionStyles(props) {
  const { padding, margin,  mT, mR, mB, mL } = props as PositionProps;
  const margins = !!margin
    ? margin
    :[
      mT ? '1.5rem' : '0',
      mR ? '1.5rem' : '0',
      mB ? '1.5rem' : '0',
      mL ? '1.5rem' : '0',
    ].join(' ');

  const paddings = padding ? `padding: ${padding}` : '';

  return `
    margin: ${margins};
    ${paddings};
  `;
}

export const getEllipsisStyles = (props) => {
  const { ellipsis } = props;

  if (ellipsis) {
    return `
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
    `;
  }

  return null;
};

export const getBrandColor = ({ theme }) => theme.colors.BRAND;
export const getBrandFontColor = ({ theme }) => theme.colors.BRAND_FONT;
export const getBrandBgColor = ({ theme }) => theme.colors.BRAND_BG;
export const getBrandShadeColor = ({ theme }) => theme.colors.BRAND_SHADE;
export const getBrandHlColor = ({ theme }) => theme.colors.BRAND_HIGHLIGHT;

export const getAccentColor = ({ theme }) => theme.colors.ACCENT;
export const getAccentHlColor = ({ theme }) => theme.colors.ACCENT_HIGHLIGHT;
export const getAccentFontColor = ({ theme }) => theme.colors.ACCENT_FONT;

export const getFontColor = ({ theme }) => theme.colors.FONT;
export const getFontSecColor = ({ theme }) => theme.colors.FONT_SECONDARY;
export const getFontShadeColor = ({ theme }) => theme.colors.FONT_SHADE;

export const getBgdColor = ({ theme }) => theme.colors.BACKGROUND;
export const getBgdLightColor = ({ theme }) => theme.colors.BACKGROUND_LIGHT;
export const getBgdLighterColor = ({ theme }) => theme.colors.BACKGROUND_LIGHTER;

export const getSuccessColor = ({ theme }) => theme.colors.SUCCESS;
export const getSuccessShadeColor = ({ theme }) => theme.colors.SUCCESS_SHADE;

export const getInfoColor = ({ theme }) => theme.colors.INFO;
export const getInfoShadeColor = ({ theme }) => theme.colors.INFO_SHADE;

export const getWarningColor = ({ theme }) => theme.colors.WARNING;
export const getWarningShadeColor = ({ theme }) => theme.colors.WARNING_SHADE;

export const getErrorColor = ({ theme }) => theme.colors.ERROR;
export const getErrorFontColor = ({ theme }) => theme.colors.ERROR_FONT;
export const getErrorShadeColor = ({ theme }) => theme.colors.ERROR_SHADE;

export const getGrayColor = ({ theme }) => theme.colors.GRAY;
export const getGrayDarkColor = ({ theme }) => theme.colors.GRAY_DARK;
export const getGrayLightColor = ({ theme }) => theme.colors.GRAY_LIGHT;

export const anyPropsAttrs = (props: any) => props;

export function getColorVariation(
  colors: ColorScheme,
  color: string,
  variation: Variations = Variations.BASE,
) {
  const colorInScheme = color.toUpperCase();
  return colors[`${colorInScheme}${variation}`];
}


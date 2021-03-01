import { ColorScheme } from 'styles/colors';

interface Options {
  disableFocus: boolean;
  isSelected: boolean;
  isHovered: boolean;
  useDarkStyle: boolean;
  colors: ColorScheme;
}

export function getIconColor(options: Options) {
  const {
    disableFocus,
    isSelected,
    isHovered,
    colors,
  } = options;

  if (disableFocus) {
    return colors.BRAND;
  }

  if (isHovered) {
    return colors.BRAND_FONT_HIGHLIGHT;
  }

  if (isSelected) {
    return colors.BRAND_FONT;
  }

  return colors.FONT_SECONDARY;
}

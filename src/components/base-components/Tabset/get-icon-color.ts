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
    useDarkStyle,
    colors,
  } = options;

  if (disableFocus) {
    return colors.BRAND;
  }

  if (isSelected && isHovered) {
    return useDarkStyle ? colors.BRAND_LIGHT : colors.BRAND_DARK;
  }

  if (isSelected) {
    return colors.BRAND;
  }

  if (isHovered) {
    return useDarkStyle ? colors.BRAND_LIGHT : colors.BRAND_DARK;
  }

  return colors.BRAND;
}

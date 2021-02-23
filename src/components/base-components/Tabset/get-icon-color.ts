import { ColorScheme } from 'styles/colors';

export function getIconColor(
  disableFocus: boolean,
  isSelected: boolean,
  isHovered: boolean,
  useDarkStyle: boolean,
  colors: ColorScheme,
) {
  if (isSelected && isHovered && !disableFocus) {
    return useDarkStyle ? colors.BRAND_LIGHT : colors.BRAND_DARK;
  }

  if (isSelected) {
    return colors.BRAND;
  }

  if (isHovered && !disableFocus) {
    return useDarkStyle ? colors.BRAND_LIGHT : colors.BRAND_DARK;
  }

  return colors.GRAY;
}

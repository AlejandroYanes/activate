import { ColorScheme } from 'styles/colors';

interface Options {
  disableFocus: boolean;
  isSelected: boolean;
  isHovered: boolean;
}

export function getIconColor(options: Options): keyof ColorScheme {
  const {
    disableFocus,
    isSelected,
    isHovered,
  } = options;

  if (disableFocus) {
    return isSelected ? 'BRAND_FONT' : 'FONT_SECONDARY';
  }

  if (isHovered) {
    return 'BRAND_FONT_HIGHLIGHT';
  }

  if (isSelected) {
    return 'BRAND_FONT';
  }

  return 'FONT_SECONDARY';
}

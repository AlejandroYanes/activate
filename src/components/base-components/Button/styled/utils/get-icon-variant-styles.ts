import {
  getFillVariantStyles,
  getFlatVariantStyles,
  getOutlineVariantStyles,
  getTextVariantStyles,
} from './index';

export default function getIconVariantStyles(props) {
  const { theme, ...buttonProps } = props;
  const { variant, color } = buttonProps;
  const { colors } = theme;

  switch (variant) {
    case 'text':
      return getTextVariantStyles(colors, color, true);
    case 'outline':
      return getOutlineVariantStyles(colors, color, true);
    case 'flat':
      return getFlatVariantStyles(colors, color, true);
    case 'fill':
      return getFillVariantStyles(colors, color);
  }
}

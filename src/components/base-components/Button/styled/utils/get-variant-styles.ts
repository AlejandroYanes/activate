import {
  getFillVariantStyles,
  getFlatVariantStyles,
  getOutlineVariantStyles,
  getTextVariantStyles,
} from './index';

export default function getVariantStyles(props) {
  const { theme, ...buttonProps } = props;
  const { variant, color } = buttonProps;
  const { colors } = theme;

  switch (variant) {
    case 'text':
      return getTextVariantStyles(colors, color);
    case 'outline':
      return getOutlineVariantStyles(colors, color);
    case 'flat':
      return getFlatVariantStyles(colors, color);
    case 'fill':
      return getFillVariantStyles(colors, color);
  }
}

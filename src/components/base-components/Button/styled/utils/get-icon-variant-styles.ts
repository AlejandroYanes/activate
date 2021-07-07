import {
  getFillVariantStyles,
  getFlatVariantStyles,
  getOutlineVariantStyles,
  getTextVariantStyles,
} from './index';

export default function getIconVariantStyles(props) {
  const { theme, ...buttonProps } = props;
  const { variant, color, disabled } = buttonProps;
  const { colors } = theme;

  switch (variant) {
    case 'text':
      return getTextVariantStyles(colors, color, disabled, true);
    case 'outline':
      return getOutlineVariantStyles(colors, color, disabled, true);
    case 'flat':
      return getFlatVariantStyles(colors, color, disabled, true);
    case 'fill':
      return getFillVariantStyles(colors, color, disabled);
  }
}

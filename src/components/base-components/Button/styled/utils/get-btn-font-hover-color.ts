import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation } from 'helpers';

export default function getBtnFontHoverColor(
  colors: ColorScheme,
  color: string,
  useBaseColor: boolean,
) {
  if (color === 'background') {
    return colors.FONT;
  }

  if (color === 'font') {
    return colors.BACKGROUND_LIGHTER;
  }

  const variant = useBaseColor ? Variations.HIGHLIGHT : Variations.FONT_HIGHLIGHT;
  return  getColorVariation(colors, color, variant);
}

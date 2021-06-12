import { ColorScheme } from 'styles/colors';
import { getColorVariation, Variations } from 'helpers';

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

  const variant = useBaseColor ? Variations.BASE_HIGHLIGHT : Variations.FONT_HIGHLIGHT;
  return  getColorVariation(colors, color, variant);
}

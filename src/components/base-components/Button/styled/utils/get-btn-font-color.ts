import { ColorScheme, Variations } from 'styles/colors';
import { getColorVariation } from 'helpers';

export default function getBtnFontColor(
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

  const variant = useBaseColor ? Variations.BASE : Variations.FONT;
  return getColorVariation(colors, color, variant);
}
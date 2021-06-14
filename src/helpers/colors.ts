import { hslToRgb, rgbToHsl } from 'helpers/colors-hsl';
import { hexToRgb, rgbToHex } from './colors-rgb';
import { getBrightness, getContrastRatio } from './color-attrs';

function getColorFactor(color: string) {
  return getBrightness(color) > 128
    ? -0.01
    : 0.01;
}

export function getShade(hexColor: string, alpha = 0.1): string {
  const rgbColor = hexToRgb(hexColor);
  const rgbString = rgbColor.join(',');

  return `rgba(${rgbString}, ${alpha})`;
}

export function changeColorLight(hexColor: string, amount: number): string {
  const [hue, sat, light] = rgbToHsl(hexToRgb(hexColor));
  const changedColor = [hue, sat, light + (amount * 100)];

  return rgbToHex(hslToRgb(changedColor));
}

export function balanceColorRatio(
  color: string,
  background: string,
  targetRatio = 4.5,
): string {
  const colorChangeFactor = getColorFactor(background);
  let balancedColor = color;
  let ratio = getContrastRatio(balancedColor, background);

  while(ratio < targetRatio) {
    balancedColor = changeColorLight(balancedColor, colorChangeFactor);
    ratio = getContrastRatio(balancedColor, background);
  }

  return balancedColor;
}

export function balanceBgColorRatio(
  color: string,
  background: string,
  targetRatio = 4.5,
): string {
  const colorChangeFactor = getColorFactor(color);
  let balancedColor = background;
  let ratio = getContrastRatio(color, balancedColor);

  while(ratio < targetRatio) {
    balancedColor = changeColorLight(balancedColor, colorChangeFactor);
    ratio = getContrastRatio(color, balancedColor);
  }

  return balancedColor;
}

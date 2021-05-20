import { hexToRgb } from './colors-rgb';

export function getBrightness(color: string): number {
  const rgb = hexToRgb(color);
  
  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}

export function getLuminance(color: string): number {
  const rgbColors = hexToRgb(color);
  const normalizedRgb = rgbColors.map(val => {
    val /= 255; // normalized
    
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((
    0.2126 * normalizedRgb[0] +
      0.7152 * normalizedRgb[1] +
      0.0722 * normalizedRgb[2]
  ).toFixed(3)
  );
}

export function getContrastRatio(primaryColor: string, secondaryColor: string): number {
  const primaryLuminance = getLuminance(primaryColor);
  const secondaryLuminance = getLuminance(secondaryColor);

  return primaryLuminance > secondaryLuminance
    ? (primaryLuminance + 0.05) / (secondaryLuminance + 0.05)
    : (secondaryLuminance + 0.05) / (primaryLuminance + 0.05);
}

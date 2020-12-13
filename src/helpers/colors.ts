import { hslToRgb, rgbToHsl } from 'helpers';

export function hexToRgb(color: string | number[]) {
  if (typeof color === 'string') {
    const aRgbHex = color.slice(1).match(/.{1,2}/g);
    return [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ];
  }
  return color;
}

export function getShade(color: string | number[], alpha = 0.1) {
  const rgbColor = hexToRgb(color);
  const rgbString = rgbColor.join(',');
  return `rgba(${rgbString}, ${alpha})`;
}

export function changeColorLight(color: string | number[], amount: number) {
  const hslColor = rgbToHsl(hexToRgb(color));
  const lightenColor = [hslColor[0], hslColor[1], amount * 100];
  const rgbString = hslToRgb(lightenColor).join(',');
  return `rgb(${rgbString})`;
}

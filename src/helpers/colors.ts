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

function addLight(color: number, amount: number) {
  const nextColor = Math.min(color - amount, 255);
  return nextColor.toString(16).length > 1 ? nextColor.toString(16) : `0${nextColor.toString(16)}`;
}

function subtractLight(color: number, amount: number) {
  const cc = Math.max(color - amount, 0);
  return cc.toString(16).length > 1 ? cc.toString(16) : `0${cc.toString(16)}`;
}

export function getShade(color: string | number[], alpha = 0.1) {
  const rgbColor = hexToRgb(color);
  const rgbString = rgbColor.join(',');
  return `rgba(${rgbString}, ${alpha})`;
}

export function lighten(color: string | number[], amount: number) {
  const rgbColor = hexToRgb(color);
  const factor = parseInt((255 * amount).toString(), 10);
  return rgbColor
    .map((c) => addLight(c, factor))
    .reduce((accumulator, value) => `${accumulator}${value}`, '#');
}

export function darken(color: string | number[], amount: number) {
  const rgbColor = hexToRgb(color);
  const factor = parseInt((255 * amount).toString(), 10);
  return rgbColor
    .map((c) => subtractLight(c, factor))
    .reduce((accumulator, value) => `${accumulator}${value}`, '#');
}

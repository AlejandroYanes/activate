import { getShade, changeColorLight } from 'helpers/color-attrs';

export enum Variations {
  BASE = '',
  HIGHLIGHT = '_HIGHLIGHT',
  BG = '_BG',
  BG_HIGHLIGHT = '_BG_HIGHLIGHT',
  FONT = '_FONT',
  FONT_HIGHLIGHT = '_FONT_HIGHLIGHT',
  SHADE = '_SHADE',
}

type BasicScheme = {
  BRAND: string;
  ACCENT: string;
  SUCCESS: string;
  INFO: string;
  WARNING: string;
  ERROR: string;
};

type VariationLabels = Exclude<keyof (typeof Variations), 'BASE'>;

type ExtendedScheme = {
  [Property in keyof BasicScheme as `${Property}_${VariationLabels}`]: string;
}

type LightColorScheme = {
  FONT: string;
  FONT_SECONDARY: string;
  FONT_SHADE: string;
  BACKGROUND: string;
  BACKGROUND_LIGHT: string;
  BACKGROUND_LIGHTER: string;
  BACKGROUND_SHADE: string;
};

type FixedColorScheme  = {
  WHITE: string;
  WHITE_SHADE: string;
  GRAY: string;
  GRAY_LIGHT: string;
  GRAY_DARK: string;
  GRAY_SHADE: string;
}

export type ColorScheme = (
  BasicScheme &
  ExtendedScheme &
  LightColorScheme &
  FixedColorScheme
);

export type Colors = keyof ColorScheme;

export const lightStyleColors: LightColorScheme = {
  FONT: '#151718',
  FONT_SECONDARY: '#57585f',
  FONT_SHADE: getShade('#151718', 0.2),
  BACKGROUND: '#ffffff',
  BACKGROUND_LIGHT: changeColorLight('#ffffff', -0.02),
  BACKGROUND_LIGHTER: changeColorLight('#ffffff', -0.03),
  BACKGROUND_SHADE: getShade('#f5f6fa'),
};

export const darkStyleColors: LightColorScheme = {
  FONT: '#f5f6fa',
  FONT_SECONDARY: '#b1b1b4',
  FONT_SHADE: getShade('#ffffff'),
  BACKGROUND: changeColorLight('#121212', 0.05),
  BACKGROUND_LIGHT: changeColorLight('#121212', 0.025),
  BACKGROUND_LIGHTER: '#121212',
  BACKGROUND_SHADE: getShade('#1F1F1F'),
};

export const fixedColors: FixedColorScheme = {
  WHITE: '#ffffff',
  WHITE_SHADE: getShade('#ffffff', 0.05),
  GRAY: '#6b6d76',
  GRAY_LIGHT: '#AFAFAF',
  GRAY_DARK: '#4a4b52',
  GRAY_SHADE: getShade('#6b6d76'),
};

export const basicColors = {
  INFO: '#1e6ff5',
  SUCCESS: '#017f23',
  WARNING: '#db5f01',
  ERROR: '#e52111',
};

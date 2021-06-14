import { getShade, changeColorLight } from 'helpers/colors';

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

type ExtendedScheme = {
  [Property in keyof BasicScheme as `${Property}_HIGHLIGHT`]: string;
};

type VariationLabels = Exclude<keyof (typeof Variations), 'BASE' | 'HIGHLIGHT'>;

type VariationExtendedScheme = {
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
  GRAY: string,
  GRAY_LIGHT: string,
  GRAY_DARK: string,
  GRAY_SHADE: string,
}

export type ColorScheme = (
  BasicScheme &
  ExtendedScheme &
  VariationExtendedScheme &
  LightColorScheme &
  FixedColorScheme
);

export type Colors = keyof ColorScheme;

export const lightStyleColors: LightColorScheme = {
  FONT: '#151718',
  FONT_SECONDARY: '#57585f',
  FONT_SHADE: getShade('#151718'),
  BACKGROUND: changeColorLight('#f5f6fa', -0.03),
  BACKGROUND_LIGHT: '#f5f6fa',
  BACKGROUND_LIGHTER: '#fff',
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
  INFO: '#1361b6',
  WARNING: '#db7601',
  ERROR: '#f60605',
  SUCCESS: '#139272',
};

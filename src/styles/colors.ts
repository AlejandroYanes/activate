import { getShade } from 'helpers';

export interface ColorScheme {
  BRAND: string;
  BRAND_HIGHLIGHT: string;
  BRAND_FONT: string;
  BRAND_FONT_HIGHLIGHT: string;
  BRAND_SHADE: string;
  ACCENT: string;
  ACCENT_HIGHLIGHT: string;
  ACCENT_FONT: string;
  ACCENT_FONT_HIGHLIGHT: string;
  ACCENT_SHADE: string;
  INFO: string;
  INFO_HIGHLIGHT: string;
  INFO_FONT: string;
  INFO_FONT_HIGHLIGHT: string;
  INFO_SHADE: string;
  WARNING: string;
  WARNING_HIGHLIGHT: string;
  WARNING_FONT: string;
  WARNING_FONT_HIGHLIGHT: string;
  WARNING_SHADE: string;
  ERROR: string;
  ERROR_HIGHLIGHT: string;
  ERROR_FONT: string;
  ERROR_FONT_HIGHLIGHT: string;
  ERROR_SHADE: string;
  SUCCESS: string;
  SUCCESS_HIGHLIGHT: string;
  SUCCESS_FONT: string;
  SUCCESS_FONT_HIGHLIGHT: string;
  SUCCESS_SHADE: string;
  WHITE: string;
  WHITE_SHADE: string;
  GRAY: string;
  GRAY_LIGHT: string;
  GRAY_DARK: string;
  GRAY_SHADE: string;
  FONT: string;
  FONT_SECONDARY: string;
  FONT_SHADE: string;
  BACKGROUND: string;
  BACKGROUND_LIGHT: string;
  BACKGROUND_SHADE: string;
}

export const lightStyleColors = {
  FONT: '#151718',
  FONT_SECONDARY: '#4a4b52',
  FONT_SHADE: getShade('#151718'),
  BACKGROUND: '#f5f6fa',
  BACKGROUND_LIGHT: '#fff',
  BACKGROUND_SHADE: getShade('#f5f6fa'),
};

export const darkStyleColors = {
  FONT: '#f5f6fa',
  FONT_SECONDARY: '#AFAFAF',
  FONT_SHADE: getShade('#ffffff'),
  BACKGROUND: '#1F1F1F',
  BACKGROUND_LIGHT: '#141414',
  BACKGROUND_SHADE: getShade('#1F1F1F'),
};

export const fixedColors = {
  WHITE: '#ffffff',
  WHITE_SHADE: getShade('#ffffff', 0.05),
  GRAY: '#6b6d76',
  GRAY_LIGHT: '#AFAFAF',
  GRAY_DARK: '#4a4b52',
  GRAY_SHADE: getShade('#6b6d76'),
};

export const basicColors = {
  INFO: '#0B4F99',
  WARNING: '#AB830D',
  ERROR: '#AE1E1E',
  SUCCESS: '#107F63',
};

import { getShade } from 'helpers';
import { StartingTheme } from './themes';

export interface ColorScheme {
  BRAND: string;
  BRAND_LIGHT: string;
  BRAND_DARK: string;
  ACCENT: string;
  ACCENT_LIGHT: string;
  ACCENT_DARK: string;
  BRAND_SHADE: string;
  ACCENT_SHADE: string;
  WHITE: string;
  WHITE_SHADE: string;
  GRAY: string;
  GRAY_LIGHT: string;
  GRAY_DARK: string;
  GRAY_SHADE: string;
  FONT: string;
  FONT_LIGHT: string;
  FONT_DARK: string;
  FONT_SHADE: string;
  BACKGROUND: string;
  BACKGROUND_LIGHT: string;
  BACKGROUND_SHADE: string;
  INFO: string;
  INFO_SHADE: string;
  WARNING: string;
  WARNING_SHADE: string;
  ERROR: string;
  ERROR_DARK: string;
  ERROR_SHADE: string;
  SUCCESS: string;
  SUCCESS_DARK: string;
  SUCCESS_SHADE: string;
}

export const lightStyleColors = {
  FONT: '#161C50',
  FONT_LIGHT: '#4F5CCF',
  FONT_DARK: '#080C21',
  FONT_SHADE: getShade('#161C50'),
  BACKGROUND: '#f5f6fa',
  BACKGROUND_LIGHT: '#fff',
  BACKGROUND_SHADE: getShade('#f5f6fa'),
};

export const darkStyleColors = {
  FONT: '#f5f6fa',
  FONT_LIGHT: '#fff',
  FONT_DARK: '#AFAFAF',
  FONT_SHADE: getShade('#ffffff'),
  BACKGROUND: '#0D1116',
  BACKGROUND_LIGHT: '#090C11',
  BACKGROUND_SHADE: getShade('#0D1116'),
};

export const basicColors = {
  WHITE: '#fff',
  WHITE_SHADE: getShade('#ffffff', 0.05),
  GRAY: '#6b6d76',
  GRAY_LIGHT: '#AFAFAF',
  GRAY_DARK: '#4a4b52',
  GRAY_SHADE: getShade('#6b6d76'),
  INFO: '#0B4F99',
  INFO_LIGHT: '#0F6DD2',
  INFO_DARK: '#05284C',
  INFO_SHADE: getShade('#0B4F99'),
  WARNING: '#AB830D',
  WARNING_LIGHT: '#DCA911',
  WARNING_DARK: '#5F4907',
  WARNING_SHADE: getShade('#AB830D'),
  ERROR: '#AE1E1E',
  ERROR_LIGHT: '#DC2E2F',
  ERROR_DARK: '#7A1515',
  ERROR_SHADE: getShade('#AE1E1E'),
  SUCCESS: '#107F63',
  SUCCESS_LIGHT: '#16B68E',
  SUCCESS_DARK: '#07362B',
  SUCCESS_SHADE: getShade('#107F63'),
};

const Colors: ColorScheme = {
  ...StartingTheme,
  ...basicColors,
  ...lightStyleColors,
};

export default Colors;

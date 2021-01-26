import { getShade } from 'helpers';
import { StartingTheme } from './themes';

export interface ColorScheme {
  BRAND: string;
  BRAND_LIGHT: string;
  BRAND_DARK: string;
  ACCENT: string;
  ACCENT_LIGHT: string;
  ACCENT_DARK: string;
  DARK: string;
  DARK_LIGHT: string;
  DARK_DARK: string;
  BRAND_SHADE: string;
  ACCENT_SHADE: string;
  DARK_SHADE: string;
  WHITE: string;
  WHITE_DARK: string;
  WHITE_SHADE: string;
  GRAY: string;
  GRAY_LIGHT: string;
  GRAY_DARK: string;
  GRAY_SHADE: string;
  BACKGROUND: string;
  MEDIUM_GRAY: string;
  DARK_GRAY: string;
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

export const basicColors = {
  WHITE: '#fff',
  WHITE_DARK: '#fff',
  WHITE_SHADE: getShade('#ffffff', 0.05),
  GRAY: '#6b6d76',
  GRAY_LIGHT: '#eeeaf5',
  GRAY_DARK: '#4a4b52',
  GRAY_SHADE: getShade('#6b6d76'),
  BACKGROUND: '#f5f6fa',
  MEDIUM_GRAY: '#E5E5E5',
  DARK_GRAY: '#AFAFAF',
  INFO: '#1d84ef',
  INFO_SHADE: getShade('#1d84ef'),
  WARNING: '#dca911',
  WARNING_SHADE: getShade('#dca911'),
  ERROR: '#dc2e2f',
  ERROR_DARK: '#ba2627',
  ERROR_SHADE: getShade('#dc2e2f'),
  SUCCESS: '#15aa85',
  SUCCESS_DARK: '#118e6f',
  SUCCESS_SHADE: getShade('#15aa85'),
};

const Colors: ColorScheme = {
  ...StartingTheme,
  ...basicColors,
};

export default Colors;

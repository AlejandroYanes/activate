import { getShade } from 'helpers';
import { StartingTheme } from './themes';

const { BRAND, ACCENT, DARK, ...variations } = StartingTheme;

const Colors = {
  BRAND,
  ACCENT,
  DARK,
  ...variations,
  BRAND_SHADE: getShade(BRAND, 0.1),
  ACCENT_SHADE: getShade(ACCENT),
  DARK_SHADE: getShade(DARK),
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

export default Colors;

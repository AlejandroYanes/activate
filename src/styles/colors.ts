import { lighten, darken } from 'react-rainbow-components/styles/helpers/color';
import { StartingTheme } from './themes';

const { BRAND, ACCENT, DARK } = StartingTheme;

const Colors = {
  BRAND,
  BRAND_DARK: darken(BRAND, 0.25),
  BRAND_SHADE: lighten(BRAND, 0.85),
  ACCENT,
  ACCENT_DARK: darken(ACCENT, 0.25),
  ACCENT_SHADE: lighten(ACCENT),
  DARK,
  DARK_DARK: darken(DARK, 0.25),
  DARK_SHADE: lighten(DARK),
  WHITE: '#fff',
  WHITE_DARK: '#fff',
  WHITE_SHADE: 'rgba(255,255,255,0.05)',
  GRAY: '#6b6d76',
  GRAY_DARK: '#4a4b52',
  GRAY_SHADE: 'rgba(107,109,118,0.1)',
  LIGHT_GRAY: '#f4f6f9',
  MEDIUM_GRAY: '#c1c3cb',
  INFO: '#009acf',
  WARNING: '#dca911',
  ERROR: '#dc2e2f',
  ERROR_DARK: '#ba2627',
  ERROR_SHADE: 'rgba(220,46,47,0.1)',
  SUCCESS: '#15aa85',
  SUCCESS_DARK: '#118e6f',
  SUCCESS_SHADE: 'rgba(26,209,163,0.1)',
};

// BRAND: '#6860c4',
// BRAND_DARK: '#4c4595',
// BRAND_SHADE: 'rgba(104,96,196,0.1)',
// DARK: '#061c3f',
// DARK_DARK: '#030e1f',
// DARK_SHADE: 'rgba(6,28,63,0.1)',

export default Colors;

import { CSSProperties } from 'react';
import { Colors } from './colors';
import { Icons } from './Icons';

export interface IconProps {
  icon: Icons;
  fillColor?: Colors;
  strokeColor?: Colors;
  height?: number;
  width?: number;
  className?: string;
  style?: CSSProperties;
}

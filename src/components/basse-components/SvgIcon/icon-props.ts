import { CSSProperties } from 'react';
import { Icons } from './Icons';

export interface IconProps {
  icon: Icons;
  fillColor?: string;
  strokeColor?: string;
  height?: number;
  width?: number;
  className?: string;
  style?: CSSProperties;
}

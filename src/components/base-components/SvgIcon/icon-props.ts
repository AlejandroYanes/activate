import { CSSProperties } from 'react';
import { Icons } from './Icons';

export interface IconProps {
  icon: Icons;
  color?: string;
  secondaryColor?: string;
  height?: number;
  width?: number;
  className?: string;
  style?: CSSProperties;
}

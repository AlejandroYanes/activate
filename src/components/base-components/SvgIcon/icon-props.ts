import { CSSProperties } from 'react';
import { ColorScheme } from 'styles/colors';
import { Icons } from './Icons';

export interface IconProps {
  icon: Icons;
  color?: keyof ColorScheme;
  secondaryColor?: keyof ColorScheme;
  height?: number;
  width?: number;
  className?: string;
  style?: CSSProperties;
}

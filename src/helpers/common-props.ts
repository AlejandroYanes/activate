import { CSSProperties } from 'react';

export interface PositionProps {
  padding?: string;
  margin?: string;
  mT?: boolean;
  mR?: boolean;
  mB?: boolean;
  mL?: boolean;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
}

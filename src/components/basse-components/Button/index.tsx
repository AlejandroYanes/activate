import React, { CSSProperties, FunctionComponent, ReactNode } from 'react';
import { Button as StyledButton } from './styled';
import Content from './Content';

export interface ButtonProps {
  label?: string | number;
  onClick: (event) => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'base' | 'fill' | 'outline';
  color?: 'brand' | 'accent' | 'success' | 'error' | 'dark' | 'gray' | 'white';
  mT?: boolean;
  mR?: boolean;
  mB?: boolean;
  mL?: boolean;
  sm?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    label,
    onClick,
    leftIcon,
    rightIcon,
    isLoading,
    children,
    ...rest
  } = props;

  return (
    <StyledButton onClick={onClick} {...rest}>
      <Content
        children={children}
        isLoading={isLoading}
        label={label}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      />
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'base',
  color: 'brand',
  className: undefined,
  style: undefined,
  leftIcon: null,
  rightIcon: null,
};

export default Button;

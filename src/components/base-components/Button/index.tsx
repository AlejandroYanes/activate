import React, { FunctionComponent, ReactNode } from 'react';
import { Button as StyledButton } from './styled';
import { PositionProps } from 'components/_base';
import Content from './Content';

export interface ButtonProps extends PositionProps {
  label?: string | number;
  onClick: (event) => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'base' | 'fill' | 'outline';
  color?: 'brand' | 'accent' | 'success' | 'error' | 'dark' | 'gray' | 'white';
  sm?: boolean;
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
        isLoading={isLoading}
        label={label}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children}
      </Content>
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

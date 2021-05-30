import React, { FunctionComponent, ReactNode, useRef } from 'react';
import { PositionProps } from 'helpers';
import { useFocusState, useHoverState } from 'hooks/UI';
import { Icons } from 'components/base-components/SvgIcon/Icons';
import IconNode from './Icon';
import Content from './Content';
import { Button as StyledButton } from './styled';

export interface ButtonProps extends PositionProps {
  label?: string | number;
  onClick: (event) => void;
  leftIcon?: Icons | ReactNode;
  rightIcon?: Icons | ReactNode;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'flat' | 'outline' | 'fill';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error' | 'background';
  align?: 'start' | 'center' | 'end';
  sm?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    label,
    onClick,
    leftIcon,
    rightIcon,
    loading,
    children,
    variant,
    color,
    sm,
    ...rest
  } = props;
  const buttonRef = useRef(undefined);
  const isHovered = useHoverState(buttonRef);
  const isFocused = useFocusState(buttonRef);

  const leftIconNode = (
    <IconNode
      isHovered={isHovered || isFocused}
      variant={variant}
      icon={leftIcon}
      color={color}
      sm={sm}
    />
  );

  const rightIconNode = (
    <IconNode
      isHovered={isHovered || isFocused}
      variant={variant}
      icon={rightIcon}
      color={color}
      sm={sm}
    />
  );

  return (
    <StyledButton
      ref={buttonRef}
      onClick={onClick}
      variant={variant}
      color={color}
      sm={sm}
      {...rest}
    >
      <Content
        label={label}
        loading={loading}
        leftIcon={leftIconNode}
        rightIcon={rightIconNode}
      >
        {children}
      </Content>
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'flat',
  color: 'brand',
  align: 'center',
  className: undefined,
  style: undefined,
  leftIcon: null,
  rightIcon: null,
  loading: false,
};

export default Button;

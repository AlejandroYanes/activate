import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import RainbowButton, { ButtonProps } from 'react-rainbow-components/components/Button';
import './styles.scss';

interface Props extends ButtonProps {
  mR?: boolean;
  sm?: boolean;
}

const Button: FunctionComponent<Props> = (props) => {
  const {
    mR,
    className,
    ...rest
  } = props;

  const buttonClassName = classnames(`button`, { mR }, className);

  return (
    <RainbowButton {...rest} className={buttonClassName} />
  );
};

Button.defaultProps = {
  type: 'button',
  className: undefined,
  style: undefined,
};

export default Button;

import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { StyledToggle } from './styled';

interface Props extends PositionProps {
  label: string;
  value: boolean;
  onChange: (event) => void;
}

const Toggle: FunctionComponent<Props> = (props) => {
  const { label, value, onChange, ...rest } = props;

  return (
    <StyledToggle {...rest}>{label}</StyledToggle>
  );
};

export default Toggle;

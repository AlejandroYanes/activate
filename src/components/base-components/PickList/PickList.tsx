import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { StyledList } from './styled';

interface Props extends PositionProps{
  value: string;
  onChange: (value) => void;
  size: 'small' | 'medium' | 'large';
}

const PickList: FunctionComponent<Props> = (props) => {
  const { value, onChange, children, ...rest } = props;

  return (
    <StyledList {...rest}>
      {children}
    </StyledList>
  );
};

export default PickList;

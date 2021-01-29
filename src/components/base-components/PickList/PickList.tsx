import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { PickListProvider } from './context';
import { StyledList } from './styled';

interface Props extends PositionProps {
  value: string;
  onChange: (value) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
}

const PickList: FunctionComponent<Props> = (props) => {
  const { value, onChange, size, color, children, ...rest } = props;

  return (
    <StyledList {...rest}>
      <PickListProvider value={value} onChange={onChange} size={size} color={color}>
        {children}
      </PickListProvider>
    </StyledList>
  );
};

PickList.defaultProps = {
  size: 'medium',
  color: 'accent',
};

export default PickList;

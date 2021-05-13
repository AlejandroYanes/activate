import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { PickListProvider } from './context';
import ListContainer from './ListContainer';
import GridContainer from './GridContainer';

export interface PickListProps extends PositionProps {
  value: string;
  onChange: (value) => void;
  layout?: 'list' | 'grid';
  cols?: number;
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
}

const wrapperMap = {
  list: ListContainer,
  grid: GridContainer,
};

const PickList: FunctionComponent<PickListProps> = (props) => {
  const { value, onChange, size, color, layout, children } = props;
  const Wrapper = wrapperMap[layout];


  return (
    <PickListProvider
      size={size}
      color={color}
      value={value}
      onChange={onChange}
    >
      <Wrapper {...props}>
        {children}
      </Wrapper>
    </PickListProvider>

  );
};

PickList.defaultProps = {
  size: 'medium',
  color: 'accent',
  layout: 'list',
  cols: 3,
};

export default PickList;

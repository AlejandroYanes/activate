import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { StyledFlexBox } from './styled/flex-box';

interface Props extends PositionProps {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justify?: (
    'flex-start' |
    'flex-end' |
    'center' |
    'stretch' |
    'space-between' |
    'space-around'
    );
  wrap?: 'initial' | 'wrap';
  width?: number | string;
  height?: number | string;
  grow?: boolean;
  flex?: string;
}

const FlexBox: FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledFlexBox {...rest}>
      {children}
    </StyledFlexBox>
  );
};

FlexBox.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  align: 'flex-start',
  wrap: 'initial',
  width: 'initial',
  height: 'initial',
};

export default FlexBox;

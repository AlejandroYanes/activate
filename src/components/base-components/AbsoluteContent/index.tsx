import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { StyledAbsolute } from './styled';

interface Props extends PositionProps {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
}

const AbsoluteContent: FunctionComponent<Props> = (props) => {
  const { children, ...styleProps } = props;

  return (
    <StyledAbsolute {...styleProps}>
      {children}
    </StyledAbsolute>
  );
};

AbsoluteContent.defaultProps = {
  top: 'initial',
  right: 'initial',
  bottom: 'initial',
  left: 'initial',
};

export default AbsoluteContent;

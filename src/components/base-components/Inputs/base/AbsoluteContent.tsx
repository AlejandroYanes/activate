import React, { FunctionComponent } from 'react';
import { StyledAbsoluteContent } from './styled/absolute-content';

interface Props {
  floatRight?: boolean;
}

const AbsoluteContent: FunctionComponent<Props> = (props) => {
  const { floatRight, children } = props;

  return (
    <StyledAbsoluteContent floatRight={floatRight}>
      {children}
    </StyledAbsoluteContent>
  );
};

export default AbsoluteContent;

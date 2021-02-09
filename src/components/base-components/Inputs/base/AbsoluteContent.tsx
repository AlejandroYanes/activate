import React, { FunctionComponent } from 'react';
import { AbsoluteContent as StyledAbsoluteContent } from './styled/absolute-content';

interface Props {
  floatRight?: boolean;
  style?: any;
}

const AbsoluteContent: FunctionComponent<Props> = (props) => {
  const { floatRight, style, children } = props;

  return (
    <StyledAbsoluteContent floatRight={floatRight} style={style} data-el="absolute-content">
      {children}
    </StyledAbsoluteContent>
  );
};

export default AbsoluteContent;

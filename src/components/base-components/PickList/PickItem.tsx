import React, { FunctionComponent } from 'react';
import { StyledItem, Touchable } from './styled';

interface Props {
  value: string;
}

const PickItem: FunctionComponent<Props> = (props) => {
  const { value, children } = props;

  return (
    <StyledItem tabIndex={-1}>
      <Touchable>
        {children}
      </Touchable>
    </StyledItem>
  );
};

export default PickItem;

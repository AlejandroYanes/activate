import React, { FunctionComponent } from 'react';
import { StyledLabel } from './styled/label';

interface Props {
  text: string;
}

const InputLabel: FunctionComponent<Props> = (props) => {
  const { text } = props;

  if (text) {
    return <StyledLabel>{text}</StyledLabel>;
  }

  return null;
};

export default InputLabel;

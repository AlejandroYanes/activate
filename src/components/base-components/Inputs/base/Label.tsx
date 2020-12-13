import React, { FunctionComponent } from 'react';
import { StyledLabel } from './styled/label';

interface Props {
  isFocused?: boolean;
  text: string;
}

const InputLabel: FunctionComponent<Props> = (props) => {
  const { text, isFocused } = props;

  if (text) {
    return <StyledLabel focused={isFocused}>{text}</StyledLabel>;
  }

  return null;
};

export default InputLabel;

import React, { FunctionComponent, ReactNode } from 'react';
import { Title as StyledTitle } from './styled';

interface Props {
  title?: string | ReactNode;
}

const Title: FunctionComponent<Props> = (props): any => {
  const { title } = props;

  if (title) {
    if (typeof title === 'string') {
      return <StyledTitle>{title}</StyledTitle>;
    }
    return title;
  }
  return null;
};

export default Title;

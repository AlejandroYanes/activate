import React, { FunctionComponent, ReactNode } from 'react';
import { Title as StyledTitle } from './styled';

interface Props {
  content: string | ReactNode;
}

const Title: FunctionComponent<Props> = (props): any => {
  const { content } = props;

  if (typeof content === 'string') {
    return (
      <StyledTitle level={3}>{content}</StyledTitle>
    );
  }

  return content;
};

export default Title;

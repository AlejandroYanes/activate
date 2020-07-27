import React, { FunctionComponent, ReactNode } from 'react';
import { StyledTimeline, Header, Actions } from './styled';
import Title from './Title';

interface Props {
  title?: string | ReactNode;
  trackPosition?: 'left' | 'right';
  actions?: ReactNode;
}

const TimeLine: FunctionComponent<Props> = (props) => {
  const { title, actions, children } = props;

  return (
    <StyledTimeline>
      <Header>
        <Title title={title} />
        <Actions>{actions}</Actions>
      </Header>
      {children}
    </StyledTimeline>
  );
};

export default TimeLine;

import React, { FunctionComponent, ReactNode } from 'react';
import { Actions, Header, StyledTimeline } from './styled';
import Title from './Title';

interface Props {
  title?: string | ReactNode;
  trackPosition?: 'left' | 'right';
  actions?: ReactNode;
}

const container = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const TimeLine: FunctionComponent<Props> = (props) => {
  const { title, actions, children } = props;

  return (
    <StyledTimeline variants={container} initial="hidden" animate="visible">
      <Header>
        <Title title={title} />
        <Actions>{actions}</Actions>
      </Header>
      {children}
    </StyledTimeline>
  );
};

export default TimeLine;

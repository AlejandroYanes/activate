import React, { FunctionComponent, ReactNode } from 'react';
import { PositionProps } from 'helpers';
import { List, StyledSummary, Header, Title, Separator } from './styled';

interface Props extends PositionProps {
  title: string;
  action?: ReactNode;
}

const Summary: FunctionComponent<Props> = (props) => {
  const { children, title, action, ...rest } = props;

  return (
    <StyledSummary {...rest}>
      <Header>
        <Title>{title}</Title>
        {action}
      </Header>
      <Separator />
      <List>
        {children}
      </List>
    </StyledSummary>
  );
};

export default Summary;

import React, { FunctionComponent, ReactNode } from 'react';
import { useAppLayout } from 'components/providers/Layout';
import Header from './Header';
import { StyledPage } from './styled';

interface Props {
  title?: string;
  actions?: ReactNode;
}

const Page: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { title, actions, children } = props;

  return (
    <StyledPage layout={layout} data-el="page">
      <Header title={title} actions={actions} />
      {children}
    </StyledPage>
  );
};

export default Page;

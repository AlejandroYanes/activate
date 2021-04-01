import React, { FunctionComponent, ReactNode } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Header from './Header';
import { StyledPage, Content } from './styled';

interface Props {
  title?: string;
  actions?: ReactNode;
}

const wrapperMap = {
  [Layout.DESKTOP]: ({ children }) => (
    <>{children}</>
  ),
  [Layout.TABLET]: ({ children }) => (
    <>{children}</>
  ),
  [Layout.MOBILE]: Content,
};

const Page: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();

  const { title, actions, children } = props;

  const Wrapper = wrapperMap[layout];

  return (
    <StyledPage layout={layout} data-el="page">
      <Header title={title} actions={actions} />
      <Wrapper>
        {children}
      </Wrapper>
    </StyledPage>
  );
};

export default Page;

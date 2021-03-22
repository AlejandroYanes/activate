import React, { FunctionComponent, ReactNode } from 'react';
import { Layout, useAppLayout } from 'components/providers/Layout';
import Header from './Header';
import { StyledPage, Content } from './styled';

interface Props {
  title?: string;
  actions?: ReactNode;
  asModal?: boolean;
  withTabBar?: boolean;
}

const wrapperMap = {
  [Layout.FULL]: ({ children }) => (
    <>{children}</>
  ),
  [Layout.MIDDLE]: ({ children }) => (
    <>{children}</>
  ),
  [Layout.SMALL]: Content,
};

const Page: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();

  const { title, actions, asModal, withTabBar, children } = props;

  const Wrapper = wrapperMap[layout];

  return (
    <StyledPage layout={layout} data-el="page">
      <Header title={title} actions={actions} />
      <Wrapper asModal={asModal} withTabBar={withTabBar}>
        {children}
      </Wrapper>
    </StyledPage>
  );
};

Page.defaultProps = {
  withTabBar: false,
  asModal: false,
};

export default Page;

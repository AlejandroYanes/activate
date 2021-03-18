import React, { FunctionComponent, ReactNode } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { Title } from 'components/base-components/Typography';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { StyledPage, Header, Actions, Content } from './styled';

interface Props {
  title?: string;
  actions?: ReactNode;
}

const wrapperMap = {
  [Layout.FULL]: React.Fragment,
  [Layout.MIDDLE]: React.Fragment,
  [Layout.SMALL]: Content,
};

const Page: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();

  const { title, actions, children } = props;
  const Wrapper = wrapperMap[layout];

  return (
    <StyledPage layout={layout} data-el="page">
      <Header layout={layout} spaced={!!title || !!actions} data-el="page-header">
        <RenderIf condition={!!title}>
          <Title level={1} bold color="brand">{title}</Title>
        </RenderIf>
        <RenderIf condition={!!actions}>
          <Actions>
            {actions}
          </Actions>
        </RenderIf>
      </Header>
      <Wrapper>
        {children}
      </Wrapper>
    </StyledPage>
  );
};

export default Page;

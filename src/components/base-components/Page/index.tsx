import React, { FunctionComponent, ReactNode } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { Title } from 'components/base-components/Typography';
import { useAppLayout } from 'components/providers/Layout';
import { StyledPage, Header, Actions } from './styled';

interface Props {
  title?: string;
  actions?: ReactNode;
}

const Page: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { title, actions, children } = props;

  return (
    <StyledPage layout={layout} data-el="page">
      <Header layout={layout} spaced={!!title || !!actions} data-el="page-header">
        <RenderIf condition={!!title}>
          <Title level={1} bold color="brand">{title}</Title>
        </RenderIf>
        <RenderIf condition={!!actions}>
          <Actions layout={layout}>
            {actions}
          </Actions>
        </RenderIf>
      </Header>
      {children}
    </StyledPage>
  );
};

export default Page;

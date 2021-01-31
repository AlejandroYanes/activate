import React, { FunctionComponent, ReactNode } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { Title } from 'components/base-components/Typography';
import { StyledPage, Header } from './styled';

interface Props {
  title?: string;
  actions?: ReactNode;
}

const Page: FunctionComponent<Props> = (props) => {
  const { title, actions, children } = props;

  return (
    <StyledPage>
      <Header spaced={!!title || !!actions}>
        <RenderIf condition={!!title}>
          <Title level={1} bold color="brand">{title}</Title>
        </RenderIf>
        <RenderIf condition={!!actions}>
          {actions}
        </RenderIf>
      </Header>
      {children}
    </StyledPage>
  );
};

export default Page;

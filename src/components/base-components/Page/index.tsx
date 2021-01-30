import React, { FunctionComponent } from 'react';
import RenderIf from 'components/base-components/RenderIf';
// import { Title } from 'components/base-components/Typography';
import { StyledPage, Title } from './styled';

interface Props {
  title?: string;
}

const Page: FunctionComponent<Props> = (props) => {
  const { title, children } = props;

  return (
    <StyledPage>
      <RenderIf condition={!!title}>
        <Title level={1} bold color="brand">{title}</Title>
      </RenderIf>
      {children}
    </StyledPage>
  );
};

export default Page;

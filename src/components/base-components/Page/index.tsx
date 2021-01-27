import React, { FunctionComponent } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { StyledPage, Title } from './styled';

interface Props {
  title?: string;
}

const Page: FunctionComponent<Props> = (props) => {
  const { title, children } = props;

  return (
    <StyledPage>
      <RenderIf condition={!!title}>
        <Title>{title}</Title>
      </RenderIf>
      {children}
    </StyledPage>
  );
};

export default Page;

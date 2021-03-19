import React, { FunctionComponent } from 'react';
import { useAppLayout } from 'components/providers/Layout';
import RenderIf from 'components/base-components/RenderIf';
import { Title } from 'components/base-components/Typography';
import { HeaderProps } from './index';
import { Actions, Header } from './styled/header';

const PrimaryHeader: FunctionComponent<HeaderProps>  = (props) => {
  const layout = useAppLayout();
  const { title, actions } = props;

  return (
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
  );
};

export default PrimaryHeader;

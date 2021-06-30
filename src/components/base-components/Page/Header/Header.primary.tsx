import React, { FunctionComponent } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import { HeaderProps } from './index';
import { Header } from './styled/header';

const PrimaryHeader: FunctionComponent<HeaderProps>  = (props) => {
  const { title, actions } = props;

  return (
    <Header spaced={!!title || !!actions} data-el="page-header">
      <RenderIf condition={!!title}>
        <Title level={1} color="brand" weight="bold">{title}</Title>
      </RenderIf>
      <RenderIf condition={!!actions}>
        <FlexBox align="center">
          {actions}
        </FlexBox>
      </RenderIf>
    </Header>
  );
};

export default PrimaryHeader;

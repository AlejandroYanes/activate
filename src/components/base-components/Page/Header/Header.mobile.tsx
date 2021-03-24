import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useAppLayout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import Avatar from 'components/base-components/Avatar';
import { HeaderProps } from './index';
import { Header, Actions } from './styled/header';

const MobileHeader: FunctionComponent<HeaderProps>  = (props) => {
  const layout = useAppLayout();
  const { title } = props;

  return (
    <RenderIf condition={!!title}>
      <Header layout={layout} data-el="page-header">
        <Title level={1} bold color="brand">{title}</Title>
        <Actions>
          <Link to="#profile">
            <Avatar icon="user2" />
          </Link>
        </Actions>
      </Header>
    </RenderIf>
  );
};

export default MobileHeader;

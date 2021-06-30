import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { headerHeight } from 'styles/variables';
import { useAuthData } from 'components/providers/Auth';
import { Title } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import { HeaderProps } from './index';

const MobileHeader: FunctionComponent<HeaderProps>  = (props) => {
  const { title, actions } = props;
  const { userInfo: { avatar } } = useAuthData();

  return (
    <FlexBox
      as="header"
      align="center"
      padding="0 16px"
      height={headerHeight}
      data-el="page-header"
    >
      <RenderIf condition={!!title}>
        <Title level={1} color="brand">{title}</Title>
      </RenderIf>
      <FlexBox align="center" margin="0 0 0 auto">
        {actions}
        <Link to="#profile">
          <Avatar src={avatar} />
        </Link>
      </FlexBox>
    </FlexBox>
  );
};

export default MobileHeader;

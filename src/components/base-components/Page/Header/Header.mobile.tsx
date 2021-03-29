import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { headerHeight, mobileHeaderHeight } from 'styles/variables';
import { Title } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import { HeaderProps } from './index';

const MobileHeader: FunctionComponent<HeaderProps>  = (props) => {
  const { title } = props;

  return (
    <RenderIf condition={!!title}>
      <FlexBox
        as="header"
        justify="space-between"
        align="center"
        padding="0 16px"
        height={headerHeight}
        data-el="page-header"
      >
        <Title level={1} color="brand">{title}</Title>
        <FlexBox align="center">
          <Link to="#profile">
            <Avatar icon="user2" />
          </Link>
        </FlexBox>
      </FlexBox>
    </RenderIf>
  );
};

export default MobileHeader;

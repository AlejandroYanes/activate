import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { formatAmount } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import { HeaderProps } from './index';

const MobileHeader: FunctionComponent<HeaderProps> = (props) => {
  const { userName, name, events, followers } = props;

  return (
    <FlexBox direction="column" align="stretch">
      <FlexBox direction="row" align="flex-start" justify="flex-start">
        <Avatar icon="user2" size="medium" />
        <FlexBox direction="column" padding="0 0 0 16px">
          <Link to="/publisher">
            <Text size="small">{userName}</Text>
            <Title level={3} color="brand">{name}</Title>
          </Link>
        </FlexBox>
      </FlexBox>
      <FlexBox justify="space-around" margin="0 0 0 auto">
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text size="small">Events</Text>
          <Title level={3} color="accent">{formatAmount(events)}</Title>
        </FlexBox>
        <FlexBox direction="column" align="center">
          <Text size="small">Followers</Text>
          <Title level={3} color="accent">{formatAmount(followers)}</Title>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default MobileHeader;

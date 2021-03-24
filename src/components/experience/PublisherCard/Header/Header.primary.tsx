import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { formatAmount } from 'helpers';
import Avatar from 'components/base-components/Avatar';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import { HeaderProps } from './index';

const PrimaryHeader: FunctionComponent<HeaderProps> = (props) => {
  const { userName, name, events, followers } = props;

  return (
    <FlexBox align="center" mB>
      <FlexBox align="center" grow>
        <Avatar icon="user2" size="medium" />
        <Link to="/publisher">
          <FlexBox direction="column" padding="0 0 0 8px">
            <Text size="small">{userName}</Text>
            <Title level={3} color="brand">{name}</Title>
          </FlexBox>
        </Link>
      </FlexBox>
      <FlexBox align="center">
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text size="small">Events</Text>
          <Title level={3} color="accent">{formatAmount(events)}</Title>
        </FlexBox>
        <FlexBox direction="column" align="center" padding="0 0 0 16px">
          <Text size="small">Followers</Text>
          <Title level={3} color="accent">{formatAmount(followers)}</Title>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default PrimaryHeader;

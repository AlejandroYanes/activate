import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { formatAmount } from 'helpers';
import { Text, Title } from 'components/base-components/Typography';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import { HeaderProps } from './index';
import { Header, Info, Stat, Stats } from './styled';

const MobileHeader: FunctionComponent<HeaderProps> = (props) => {
  const { userName, name, events, followers } = props;

  return (
    <Header asColumn>
      <FlexBox direction="row" align="center" justify="flex-start">
        <Avatar icon="user2" size="medium" />
        <Stats mobile>
          <Stat>
            <Text size="small">Events</Text>
            <Title level={3} color="accent">{formatAmount(events)}</Title>
          </Stat>
          <Stat>
            <Text size="small">Followers</Text>
            <Title level={3} color="accent">{formatAmount(followers)}</Title>
          </Stat>
        </Stats>
      </FlexBox>
      <Link to="/publisher">
        <Info mobile>
          <Text size="small">{userName}</Text>
          <Title level={3} color="brand">{name}</Title>
        </Info>
      </Link>
    </Header>
  );
};

export default MobileHeader;

import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { formatAmount } from 'helpers';
import Avatar from 'components/base-components/Avatar';
import { Text, Title } from 'components/base-components/Typography';
import { HeaderProps } from './index';
import { Header, Info, Stat, Stats, User } from './styled';

const PrimaryHeader: FunctionComponent<HeaderProps> = (props) => {
  const { userName, name, events, followers } = props;

  return (
    <Header>
      <User>
        <Avatar icon="user2" size="medium" />
        <Link to="/publisher">
          <Info>
            <Text size="small">{userName}</Text>
            <Title level={3} color="brand">{name}</Title>
          </Info>
        </Link>
      </User>
      <Stats>
        <Stat>
          <Text size="small">Events</Text>
          <Title level={3} color="accent">{formatAmount(events)}</Title>
        </Stat>
        <Stat>
          <Text size="small">Followers</Text>
          <Title level={3} color="accent">{formatAmount(followers)}</Title>
        </Stat>
      </Stats>
    </Header>
  );
};

export default PrimaryHeader;

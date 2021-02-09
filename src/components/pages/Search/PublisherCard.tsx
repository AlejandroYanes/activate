import React, { FunctionComponent, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import faker from 'faker';
import { formatAmount } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import Avatar from 'components/base-components/Avatar';
import { Paragraph, Text, Title } from 'components/base-components/Typography';
import AvatarGroup from 'components/base-components/AvatarGroup';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import { Actions, Card, Footer, Header, Stat, Stats, Top } from './styled/publisher-card';

const avatars = ['user1', 'user2', 'user6'];

const PublisherCard: FunctionComponent = () => {
  const Colors = useAppColors();
  const { push } = useHistory();
  const { name, userName, bio, events, followers } = useMemo(() => ({
    name: `${faker.company.companyName()}, ${faker.company.companySuffix()}`,
    userName: `@${faker.internet.userName()}`,
    bio: faker.lorem.lines(4),
    events: faker.random.number(),
    followers: faker.random.number(),
  }), []);

  return (
    <Card>
      <Top>
        <Avatar icon="user2" size="medium" />
        <Header>
          <Text size="small">{userName}</Text>
          <Title level={3} color="brand">{name}</Title>
        </Header>
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
      </Top>
      <Paragraph mB>
        {bio}
      </Paragraph>
      <Footer>
        <AvatarGroup icons={avatars} size="x-small" />
        <Actions>
          <IconButton
            onClick={() => push('/publisher')}
            icon={Icons.RESUME}
            color={Colors.INFO}
            buttonColor="info"
            variant="flat"
            size="large"
            mR
          />
          <IconButton
            onClick={() => undefined}
            icon={Icons.STAR}
            color={Colors.ACCENT}
            buttonColor="accent"
            variant="flat"
            size="large"
          />
        </Actions>
      </Footer>
    </Card>
  );
};

export default PublisherCard;

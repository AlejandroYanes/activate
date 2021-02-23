import React, { FunctionComponent, useMemo } from 'react';
import { useHistory, Link } from 'react-router-dom';
import faker from 'faker';
import { formatAmount } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Paragraph, Text, Title } from 'components/base-components/Typography';
import { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import AvatarGroup from 'components/base-components/AvatarGroup';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import { Actions, Card, Footer, Header, Info, Stat, Stats, User } from './styled/publisher-card';

const avatars = ['user1', 'user2', 'user6'];

const PublisherCard: FunctionComponent = () => {
  const Colors = useAppColors();
  const layout = useAppLayout();
  const { push } = useHistory();

  const { name, userName, bio, events, followers } = useMemo(() => ({
    name: `${faker.company.companyName()}, ${faker.company.companySuffix()}`,
    userName: `@${faker.internet.userName()}`,
    bio: faker.lorem.lines(4),
    events: faker.random.number(),
    followers: faker.random.number(),
  }), []);

  const isSmallLayout = layout === Layout.SMALL;

  return (
    <Card>
      <Header asColumn={isSmallLayout}>
        <User>
          <Avatar icon="user2" size="medium" />
          <Link to="/publisher">
            <Info>
              <Text size="small">{userName}</Text>
              <Title level={3} color="brand">{name}</Title>
            </Info>
          </Link>
        </User>
        <Stats spaced={isSmallLayout}>
          <Stat padded={!isSmallLayout}>
            <Text size="small">Events</Text>
            <Title level={3} color="accent">{formatAmount(events)}</Title>
          </Stat>
          <Stat padded={!isSmallLayout}>
            <Text size="small">Followers</Text>
            <Title level={3} color="accent">{formatAmount(followers)}</Title>
          </Stat>
        </Stats>
      </Header>
      <Paragraph mB>
        {bio}
      </Paragraph>
      <Footer>
        <AvatarGroup icons={avatars} size="x-small" />
        <Actions>
          <RenderIf condition={!isSmallLayout}>
            <IconButton
              onClick={() => push('/publisher')}
              icon={Icons.RESUME}
              color={Colors.INFO}
              buttonColor="info"
              variant="flat"
              size="large"
              mR
            />
          </RenderIf>
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

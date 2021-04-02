import React, { FunctionComponent, useMemo } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import { formatAmount } from 'helpers';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { useAppColors } from 'components/providers/Theme';
import { Text, Title } from 'components/base-components/Typography';
import { Icons } from 'components/base-components/SvgIcon';
import AvatarGroup from 'components/base-components/AvatarGroup';
import IconButton from 'components/base-components/IconButton';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import { Card } from './styled';

const avatars = ['user1', 'user2', 'user6', 'user11', 'user8'];
const Separator = () => <div style={{ flex: 1 }} />;

const PublisherCard: FunctionComponent = () => {
  const colors = useAppColors();
  const layout = useAppLayout();

  const {
    avatarUrl,
    name,
    userName,
    events,
    followers,
  } = useMemo(() => ({
    avatarUrl: `user${faker.random.number({ min: 1, max: 12 })}`,
    name: `${faker.company.companyName()}, ${faker.company.companySuffix()}`,
    userName: `@${faker.internet.userName()}`,
    events: faker.random.number(),
    followers: faker.random.number(),
    friendsFollowing: faker.random.number({ min: 0, max: 1 }),
  }), []);

  const link = `${layout === Layout.MOBILE ? '#' : '/'}publisher`;

  return (
    <Card>
      <Avatar icon={avatarUrl} size="large" margin="0 auto 8px" />
      <Link to={link}>
        <FlexBox direction="column" align="center">
          <Title level={3} align="center">{name}</Title>
          <Text align="center">{userName}</Text>
        </FlexBox>
      </Link>
      <Separator />
      <FlexBox align="center" margin="28px auto 0">
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text color="secondary">Events</Text>
          <Title level={3}>{formatAmount(events)}</Title>
        </FlexBox>
        <FlexBox direction="column" align="center" padding="0 16px">
          <Text color="secondary">Followers</Text>
          <Title level={3}>{formatAmount(followers)}</Title>
        </FlexBox>
      </FlexBox>
      <AvatarGroup icons={avatars} margin="28px auto 0" />
      <FlexBox align="center" margin="16px auto 0">
        <IconButton
          size="large"
          buttonColor="accent"
          onClick={() => undefined}
          icon={Icons.STAR}
          color={colors.ACCENT}
        />
      </FlexBox>
    </Card>
  );
};

export default PublisherCard;

import React, { FunctionComponent, useMemo } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Text, Title } from 'components/base-components/Typography';
import Avatar from 'components/base-components/Avatar';
import FlexBox from 'components/base-components/FlexBox';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Button } from 'components/base-components/Button';
import { Card } from './styled';

const avatars = ['user1', 'user2', 'user3', 'user4', 'user4'];
const Separator = () => <div style={{ flex: 1 }} />;

const UserCard: FunctionComponent = () => {
  const layout = useAppLayout();

  const { userName, name } = useMemo(() => ({
    userName: `@${faker.internet.userName()}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }), []);

  const link = `${layout === Layout.MOBILE ? '#' : '/'}user`;

  return (
    <Card>
      <Avatar src="user4" size="large" margin="0 auto 8px" />
      <Link to={link}>
        <FlexBox direction="column" align="center">
          <Title level={3} align="center">{name}</Title>
          <Text align="center">{userName}</Text>
        </FlexBox>
      </Link>
      <Separator />
      <AvatarGroup icons={avatars} margin="28px auto 0" />
      <FlexBox align="center" margin="24px auto 0">
        <Button
          onClick={() => undefined}
          label="Add Friend"
          variant="fill"
          color="brand"
        />
      </FlexBox>
    </Card>
  );
};

export default UserCard;

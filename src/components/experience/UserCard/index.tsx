import React, { FunctionComponent, useMemo } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import { useAppColors } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Text, Title } from 'components/base-components/Typography';
import { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import IconButton from 'components/base-components/IconButton';
import FlexBox from 'components/base-components/FlexBox';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Card } from './styled';

const avatars = ['user1', 'user2', 'user6', 'user11', 'user8'];
const Separator = () => <div style={{ flex: 1 }} />;

const UserCard: FunctionComponent = () => {
  const colors = useAppColors();
  const layout = useAppLayout();

  const { userName, name } = useMemo(() => ({
    userName: `@${faker.internet.userName()}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }), []);

  const link = `${layout === Layout.MOBILE ? '#' : '/'}user`;

  return (
    <Card>
      <Avatar icon="user12" size="large" margin="0 auto 8px" />
      <Link to={link}>
        <FlexBox direction="column" align="center">
          <Title level={3} align="center">{name}</Title>
          <Text align="center">{userName}</Text>
        </FlexBox>
      </Link>
      <Separator />
      <AvatarGroup icons={avatars} margin="28px auto 0" />
      <FlexBox align="center" margin="16px auto 0">
        <IconButton
          size="large"
          buttonColor="accent"
          onClick={() => undefined}
          icon={Icons.ADD_USER}
          color={colors.ACCENT}
        />
      </FlexBox>
    </Card>
  );
};

export default UserCard;

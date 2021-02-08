import React, { FunctionComponent, useMemo } from 'react';
import faker from 'faker';
import { useAppColors } from 'components/providers/Theme';
import Avatar from 'components/base-components/Avatar';
import { Text, Title } from 'components/base-components/Typography';
import IconButton from 'components/base-components/IconButton';
import { Icons } from 'components/base-components/SvgIcon';
import { Card, Info } from './styled/user-card';

const UserCard: FunctionComponent = () => {
  const Colors = useAppColors();
  const { userName, name } = useMemo(() => ({
    userName: `@${faker.internet.userName()}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }), []);

  return (
    <Card>
      <Avatar icon="user2" size="medium" />
      <Info>
        <Text size="small">{userName}</Text>
        <Title level={3} color="brand">{name}</Title>
      </Info>
      <IconButton
        onClick={() => undefined}
        icon={Icons.RESUME}
        color={Colors.INFO}
        buttonColor="info"
        variant="flat"
        size="large"
        mR
      />
      <IconButton
        onClick={() => undefined}
        icon={Icons.ADD_USER}
        color={Colors.ACCENT}
        buttonColor="accent"
        variant="flat"
        size="large"
      />
    </Card>
  );
};

export default UserCard;

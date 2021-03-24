import React, { FunctionComponent, useMemo } from 'react';
import { useHistory, Link } from 'react-router-dom';
import faker from 'faker';
import { useAppColors } from 'components/providers/Theme';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Text, Title } from 'components/base-components/Typography';
import { Icons } from 'components/base-components/SvgIcon';
import Avatar from 'components/base-components/Avatar';
import IconButton from 'components/base-components/IconButton';
import RenderIf from 'components/base-components/RenderIf';
import FlexBox from 'components/base-components/FlexBox';
import { Card } from './styled';

const UserCard: FunctionComponent = () => {
  const Colors = useAppColors();
  const layout = useAppLayout();
  const { push } = useHistory();

  const { userName, name } = useMemo(() => ({
    userName: `@${faker.internet.userName()}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }), []);

  const isSmallLayout = layout === Layout.SMALL;

  return (
    <Card>
      <Avatar icon="user2" size="medium" />
      <FlexBox direction="column" padding="0 0 0 16px" grow>
       <Link to="user">
         <Text size="small">{userName}</Text>
         <Title level={3} color="brand">{name}</Title>
       </Link>
      </FlexBox>
      <RenderIf condition={!isSmallLayout}>
        <IconButton
          onClick={() => push('/user')}
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

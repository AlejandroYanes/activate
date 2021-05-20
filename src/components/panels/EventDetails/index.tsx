import React, { FunctionComponent, useMemo } from 'react';
import faker from 'faker';
import { formatCurrency, formatDateTime } from 'helpers';
import { Text } from 'components/base-components/Typography';
import Button from 'components/base-components/Button';
import Badge from 'components/base-components/Badge';
import AvatarGroup from 'components/base-components/AvatarGroup';
import FlexBox from 'components/base-components/FlexBox';
import { Panel, StyledLink } from './styled';

const event = {
  date: new Date(),
  author: {
    name: faker.company.companyName(),
    image: 'user2',
  },
  address: `
  Arcos de Belen, calle Acosta e/ Compostela y Picota, Habana Vieja
  `,
  price: faker.finance.amount(10, 1000),
  tags: new Array(10).fill(1).map(() => faker.lorem.word()),
};

const avatars = ['user1', 'user2', 'user3'];

const EventDetailsPanel: FunctionComponent = () => {
  const { date, address, price, tags } = event;

  const tagElements = useMemo(() => (
    tags.map((tag) => <Badge key={tag} label={tag} color="light" sm mR mB />)
  ), [tags]);

  return (
    <Panel>
      <FlexBox direction="column" mB>
        <Text color="secondary" padding="0 0 4px 0">Date</Text>
        <Text>{formatDateTime(date)}</Text>
      </FlexBox>
      <FlexBox direction="column" mB>
        <Text color="secondary" padding="0 0 4px 0">Address</Text>
        <Text>{address}</Text>
      </FlexBox>
      <FlexBox direction="column" mB>
        <Text color="secondary" padding="0 0 4px 0">Price</Text>
        <FlexBox align="center" width="100%">
          <Text margin="6px 0 0 0">
            {`${formatCurrency(price)} - ${formatCurrency(price)}`}
          </Text>
          <Button
            sm
            color="brand"
            variant="fill"
            label="Buy a ticket"
            onClick={() => undefined}
            margin="0 0 0 auto"
          />
        </FlexBox>
      </FlexBox>
      <FlexBox direction="column" mB>
        <Text color="secondary" padding="0 0 4px 0">Available at</Text>
        <StyledLink href="https://faketicketweb.com">
          https://faketicketweb.com
        </StyledLink>
      </FlexBox>
      <AvatarGroup icons={avatars} label="+ 16k" size="small" mB />
      <FlexBox wrap>
        {tagElements}
      </FlexBox>
    </Panel>
  );
};

export default EventDetailsPanel;

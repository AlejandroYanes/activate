import React, { FunctionComponent, useMemo } from 'react';
import faker from 'faker';
import { formatCurrency, formatDateTime } from 'helpers';
import { Text } from 'components/base-components/Typography';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
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

const avatars = ['user1', 'user2', 'user6'];

const EventDetailsPanel: FunctionComponent = () => {
  const { date, address, price, tags } = event;

  const tagElements = useMemo(() => (
    tags.map((tag) => <Badge key={tag} label={tag} color="light" sm mR mT />)
  ), [tags]);

  return (
    <Panel>
      <FlexBox align="center" mB>
        <SvgIcon icon={Icons.CALENDAR_FILLED} />
        <Text padding="0 0 0 6px">{formatDateTime(date)}</Text>
      </FlexBox>
      <FlexBox align="flex-start" mB>
        <SvgIcon icon={Icons.MAP_PIN} height={26} width={26} />
        <Text padding="0 0 0 6px">{address}</Text>
      </FlexBox>
      <FlexBox align="center" mB>
        <SvgIcon icon={Icons.TICKET} />
        <Text padding="0 0 0 6px">
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
      <FlexBox align="center" mB>
        <SvgIcon icon={Icons.GLOBE} />
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

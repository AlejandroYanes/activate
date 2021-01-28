import React, { FunctionComponent, useMemo } from 'react';
import faker from 'faker';
import { formatCurrency, formatDateTime } from 'helpers';
import Button from 'components/base-components/Button';
import Badge from 'components/base-components/Badge';
import AvatarGroup from 'components/base-components/AvatarGroup';
import { Entry, Line, Panel } from './styled';

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
      <Entry>
        Date
      </Entry>
      <Line>
        <span>{formatDateTime(date)}</span>
      </Line>
      <Entry>
        Address
      </Entry>
      <Line>
        <span>{address}</span>
      </Line>
      <Entry>
        Price
      </Entry>
      <Line centered>
        <span>
          {`${formatCurrency(price)} - ${formatCurrency(price)}`}
        </span>
        <Button
          sm
          color="brand"
          variant="fill"
          label="Buy a ticket"
          onClick={() => undefined}
          style={{ marginLeft: 'auto' }}
        />
      </Line>
      <Entry>Available at</Entry>
      <Line>
        <a href="https://faketicketweb.com">https://faketicketweb.com</a>
      </Line>
      <Entry>Attendance</Entry>
      <Line centered>
        <AvatarGroup icons={avatars} label="+ 16k" size="small" />
      </Line>
      <Entry>Tags</Entry>
      <Line>
        {tagElements}
      </Line>
    </Panel>
  );
};

export default EventDetailsPanel;

import React, { FunctionComponent } from 'react';
import faker from 'faker';
import Colors from 'styles/colors';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { TimeLine, TimeMark } from 'components/base-components/Timeline';
import Button from 'components/base-components/Button';
import { Attribute, Card, Label, Wrapper } from './styled';

const actionIcon = <SvgIcon icon={Icons.CHEVRON_RIGHT} color={Colors.GRAY} size="small" />;

const dateFormatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
});

const timeFormatter = new Intl.DateTimeFormat('default', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
});

const events = new Array(3).fill(1).map(() => ({
  id: faker.random.uuid(),
  name: faker.lorem.words(5),
  time: faker.date.future(),
  location: faker.address.streetAddress(),
}));

function Events(): any {
  return events.map((event) => (
    <Card key={event.id}>
      <Label>{event.name}</Label>
      <Attribute>
        <SvgIcon icon={Icons.CLOCK} color={Colors.GRAY} />
        <span>{timeFormatter.format(event.time)}</span>
      </Attribute>
      <Attribute>
        <SvgIcon icon={Icons.MAP_PIN} color={Colors.GRAY} />
        <span>{event.location}</span>
      </Attribute>
    </Card>
  ));
}

const UpcomingEventsPanel: FunctionComponent = () => {
  const action = (
    <Button
      sm
      label="View all"
      color="gray"
      rightIcon={actionIcon}
      onClick={() => undefined}
    />
  );

  return (
    <Wrapper>
      <TimeLine title="Upcoming events" actions={action}>
        <TimeMark date={dateFormatter.format(faker.date.future())}>
          <Card>
            <Label>{faker.lorem.words(5)}</Label>
            <Attribute>
              <SvgIcon icon={Icons.CLOCK} color={Colors.GRAY} />
              <span>{timeFormatter.format()}</span>
            </Attribute>
            <Attribute>
              <SvgIcon icon={Icons.MAP_PIN} color={Colors.GRAY} />
              <span>{faker.address.streetAddress()}</span>
            </Attribute>
          </Card>
        </TimeMark>
        <TimeMark date={dateFormatter.format(faker.date.future())}>
          <Events />
        </TimeMark>
      </TimeLine>
    </Wrapper>
  );
};

export default UpcomingEventsPanel;

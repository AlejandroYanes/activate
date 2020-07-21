import React, { FunctionComponent } from 'react';
import faker from 'faker';
import Colors from 'styles/colors';
import { Summary, SummaryItem } from 'components/base-components/Summary';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import Button from 'components/base-components/Button';
import { EventImg } from './styled';

import backgroundImage from 'assets/images/cuba-1082913_1920.jpg';

const img1 = <EventImg src={backgroundImage} alt="event-1" />;
const img2 = <EventImg src={backgroundImage} alt="event-2" />;
const img3 = <EventImg src={backgroundImage} alt="event-3" />;
const img4 = <EventImg src={backgroundImage} alt="event-4" />;
const actionIcon = <SvgIcon icon={Icons.CHEVRON_RIGHT} strokeColor={Colors.GRAY} size="small" />;

const formatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
});

const UpcomingEvents: FunctionComponent = () => {
  const action = (
    <Button
      sm
      label=" View all"
      color="gray"
      rightIcon={actionIcon}
      onClick={() => undefined}
    />
  );

  return (
    <Summary title="Your upcoming events" action={action} mB>
      <SummaryItem
        leftNode={img1}
        label={faker.lorem.words(6)}
        rightNode={formatter.format(faker.date.future())}
      />
      <SummaryItem
        leftNode={img2}
        label={faker.lorem.words(6)}
        rightNode={formatter.format(faker.date.future())}
      />
      <SummaryItem
        leftNode={img3}
        label={faker.lorem.words(6)}
        rightNode={formatter.format(faker.date.future())}
      />
      <SummaryItem
        leftNode={img4}
        label={faker.lorem.words(6)}
        rightNode={formatter.format(faker.date.future())}
      />
    </Summary>
  );
};

export default UpcomingEvents;

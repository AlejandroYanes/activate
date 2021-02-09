import React, { FunctionComponent, useState } from 'react';
import { getEventValue } from 'helpers';
import Page from 'components/base-components/Page';
import DateTimePicker from 'components/base-components/DateTimePicker';
import { Input } from 'components/base-components/Inputs';
import { Icons } from 'components/base-components/SvgIcon';
import Button from 'components/base-components/Button';

const AboutPage: FunctionComponent = () => {
  const [date, setDate] = useState([] as Date[]);
  const [publisher, setPub] = useState('');

  return (
    <Page title="About Us">
      <DateTimePicker
        label="Time"
        onChange={(event) => setDate(getEventValue(event))}
        value={date}
        type="date-range"
        mB
        showClear
      />
      <Input
        label="Publisher"
        value={publisher}
        onChange={(event) => setPub(getEventValue(event))}
        icon={Icons.MEGAPHONE}
        showClear
        mT
      />
      <Button onClick={() => undefined} label="test" mT variant="fill" />
    </Page>
  );
};

export default AboutPage;

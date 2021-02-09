import React, { FunctionComponent, useCallback, useState } from 'react';
import { getEventValue } from 'helpers';
import Page from 'components/base-components/Page';
import DateTimePicker from 'components/base-components/DateTimePicker';
import Button from 'components/base-components/Button';

const AboutPage: FunctionComponent = () => {
  const [date, setDate] = useState([] as Date[]);

  const handleDateChange = useCallback((event) => setDate(getEventValue(event)), []);

  return (
    <Page title="About Us">
      <DateTimePicker onChange={handleDateChange} value={date} type="date-range" showClear />
      <div style={{ display: 'flex', marginTop: '32px' }}>
        <Button onClick={() => undefined} label="test" variant="base" mR />
        <Button onClick={() => undefined} label="test" variant="flat" mR />
        <Button onClick={() => undefined} label="test" variant="fill" mR />
      </div>
    </Page>
  );
};

export default AboutPage;

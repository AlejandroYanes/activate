import React, { FunctionComponent, useCallback, useState } from 'react';
import { subDays } from 'date-fns';
import Button from 'components/base-components/Button';
import { Field, Form } from 'components/base-components/Form';
import DateTimePicker from 'components/base-components/DateTimePicker';
import { BottomSection, Content, StyledSearch } from './styled';

const today = new Date();
const yesterday = subDays(today, 1);
const initialSearchState = { event: '', publisher: '', date: [yesterday, today], dateTime: today };

const SearchPanel: FunctionComponent = () => {
  const [search, setSearch] = useState(initialSearchState);

  const handleChange = useCallback((nextValue) => setSearch(nextValue), []);

  return (
    <StyledSearch>
      <Content>
        <Form state={search} onChange={handleChange}>
          <Field name="event" label="Event Name" showClear />
          <Field name="publisher" label="Publisher" showClear mT />
          <Field
            name="date"
            label="Date of the event"
            component={DateTimePicker}
            type="date-range"
            showOptions
            showClear
            mT
          />
          <Field
            name="dateTime"
            label="Date Time test"
            component={DateTimePicker}
            type="date-time"
            showClear
            mT
          />
        </Form>
      </Content>
      <BottomSection>
        <Button onClick={() => setSearch(initialSearchState)} label="Clear" variant="base" mR />
        <Button onClick={() => undefined} label="Search" variant="base" mR />
      </BottomSection>
    </StyledSearch>
  );
};

export default SearchPanel;

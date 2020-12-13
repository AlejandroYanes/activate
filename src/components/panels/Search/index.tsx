import React, { FunctionComponent, useCallback, useState } from 'react';
import Button from 'components/base-components/Button';
import { Field, Form } from 'components/base-components/Form';
import DateTimePicker from 'components/base-components/DateTimePicker';
import { BottomSection, Content, StyledSearch } from './styled';

const today = new Date();
const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
const initialSearchState = { event: '', publisher: '', date: [yesterday, today] };

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
            label="Start Date"
            component={DateTimePicker}
            type="date-range"
            showOptions
            showClear
            mT
          />
        </Form>
      </Content>
      <BottomSection>
        <Button onClick={() => setSearch(initialSearchState)} label="Clear" variant="base" mR />
        <Button onClick={() => undefined} label="Search" variant="base" />
      </BottomSection>
    </StyledSearch>
  );
};

export default SearchPanel;

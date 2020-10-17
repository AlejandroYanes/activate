import React, { FunctionComponent, useCallback, useState } from 'react';
import Button from 'components/base-components/Button';
import { Field, Form } from 'components/base-components/Form';
import { BottomSection, Content, StyledSearch } from './styled';
import DateTimePicker from '../../base-components/DateTimePicker';

const today = new Date();
const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
const initialSearchState = { event: '', publisher: '', date: [yesterday, today] };

const SearchPanel: FunctionComponent = () => {
  const [value, setValue] = useState(initialSearchState);

  const handleChange = useCallback((nextValue) => setValue(nextValue), [value]);

  return (
    <StyledSearch>
      <Content>
        <Form value={value} onChange={handleChange}>
          <Field name="event" label="Event Name" showClear />
          <Field name="publisher" label="Publisher" showClear mT />
          <Field
            name="date"
            label="Start Date"
            component={DateTimePicker}
            useRange
            showOptions
            showClear
            mT
          />
        </Form>
      </Content>
      <BottomSection>
        <Button onClick={() => setValue(initialSearchState)} label="Clear" variant="base" mR />
        <Button onClick={() => undefined} label="Search" variant="base" />
      </BottomSection>
    </StyledSearch>
  );
};

export default SearchPanel;

import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import faker from 'faker';
import { Field, Form } from 'components/base-components/Form';
import { Option, Options } from 'components/base-components/Options';
import RenderIf from 'components/base-components/RenderIf';
import { DateTimePicker, Select } from 'components/base-components/Inputs';
import { StyledSearch } from './styled';

enum EventLocation {
  OnLine = 'OnLine',
  All = 'All',
  OnSite = 'OnSite',
}

const initialSearchState = {
  location: EventLocation.All,
  address: '',
  publisher: null,
  category: [],
  date: [],
};

const publishers = Array(30).fill('1').map(() => ({
  value: faker.random.uuid(),
  label: faker.company.companyName(),
}));

const categories = [
  { value: faker.random.uuid(), label: 'Kids friendly' },
  { value: faker.random.uuid(), label: 'Outdoor' },
  { value: faker.random.uuid(), label: 'Sports' },
  { value: faker.random.uuid(), label: 'Arts' },
  { value: faker.random.uuid(), label: 'Night Event' },
];

const FiltersPanel: FunctionComponent = () => {
  const [search, setSearch] = useState(initialSearchState);
  const panelRef = useRef(undefined);

  const handleChange = useCallback((nextValue) => setSearch(nextValue), []);

  return (
    <StyledSearch ref={panelRef}>
      <Form state={search} onChange={handleChange}>
        <Field name="location" component={Options} fullWidth mB>
          <Option value={EventLocation.OnLine} label="Online" icon="GLOBE" />
          <Option value={EventLocation.All} label="All" icon="LIST" />
          <Option value={EventLocation.OnSite} label="Onsite" icon="MAP_PIN" />
        </Field>
        <RenderIf condition={search.location === EventLocation.OnSite}>
          <Field
            name="address"
            label="Address"
            icon="MAP_PIN"
            showClear
            mB
          />
        </RenderIf>
        <Field
          name="date"
          label="Date of the event"
          component={DateTimePicker}
          type="date-range"
          showOptions
          showClear
          mB
        />
        <Field
          name="publisher"
          label="Publisher"
          component={Select}
          options={publishers}
          icon="MEGAPHONE"
          anchorTo={panelRef}
          showSearch
          showClear
          mB
        />
        <Field
          name="category"
          label="Categories"
          component={Select}
          options={categories}
          icon="TAG"
          anchorTo={panelRef}
          showClear
          multiple
          mB
        />
      </Form>
    </StyledSearch>
  );
};

export default FiltersPanel;

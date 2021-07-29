import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import faker from 'faker';
import { Layout, useAppLayout } from 'components/providers/Layout';
import { Field, Form } from 'components/base-components/Form';
import { Option, Options } from 'components/base-components/Options';
import RenderIf from 'components/base-components/RenderIf';
import { DateTimePicker, Select } from 'components/base-components/Inputs';
import { Text } from 'components/base-components/Typography';
import { Button } from 'components/base-components/Button';
import { StyledSearch } from './styled';
import { EventLocation, Filters, initialFilters } from './types';

const categories = [
  { value: faker.random.uuid(), label: 'Kids friendly' },
  { value: faker.random.uuid(), label: 'Outdoor' },
  { value: faker.random.uuid(), label: 'Sports' },
  { value: faker.random.uuid(), label: 'Arts' },
  { value: faker.random.uuid(), label: 'Night Event' },
];

const footerSpacingStyles = {
  [Layout.DESKTOP]: 'auto auto 0',
  [Layout.TABLET]: 'auto auto 16px',
  [Layout.MOBILE]: 'auto auto 16px',
};

const FiltersPanel: FunctionComponent = () => {
  const [search, setSearch] = useState<Filters>(initialFilters);
  const panelRef = useRef(undefined);
  const layout = useAppLayout();

  const handleChange = useCallback((nextValue) => setSearch(nextValue), []);

  return (
    <StyledSearch ref={panelRef}>
      <Form state={search} onChange={handleChange}>
        <Text margin="0 0 6px 20px">Location</Text>
        <Field
          name="location"
          component={Options}
          color="brand"
          fullWidth
          highlight
          mB
        >
          <Option value={EventLocation.All} label="All" />
          <Option value={EventLocation.OnLine} label="Online" />
          <Option value={EventLocation.OnSite} label="Onsite" />
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
          name="category"
          label="Categories"
          component={Select}
          options={categories}
          anchorTo={panelRef}
          icon="TAG"
          showClear
          multiple
          mB
        />
      </Form>
      <Button
        onClick={() => undefined}
        label="Apply filters"
        variant="fill"
        color="accent"
        margin={footerSpacingStyles[layout]}
      />
    </StyledSearch>
  );
};

export default FiltersPanel;

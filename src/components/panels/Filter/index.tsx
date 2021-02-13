import React, { FunctionComponent, useCallback, useState } from 'react';
import { Field, Form } from 'components/base-components/Form';
import { Option, Options } from 'components/base-components/Options';
import { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import DateTimePicker from 'components/base-components/DateTimePicker';
import { Content, StyledSearch } from './styled';

enum EventLocation {
  OnLine = 'OnLine',
  All = 'All',
  OnSite = 'OnSite',
}

const initialSearchState = {
  location: EventLocation.All,
  address: '',
  publisher: '',
  date: undefined,
};

const FilterPanel: FunctionComponent = () => {
  const [search, setSearch] = useState(initialSearchState);

  const handleChange = useCallback((nextValue) => setSearch(nextValue), []);

  return (
    <StyledSearch>
      <Content>
        <Form state={search} onChange={handleChange}>
          <Field name="location" component={Options} fullWidth mB>
            <Option value={EventLocation.OnLine} label="Online" icon={Icons.GLOBE} />
            <Option value={EventLocation.All} label="All" icon={Icons.GRID} />
            <Option value={EventLocation.OnSite} label="Onsite" icon={Icons.MAP_PIN} />
          </Field>
          <RenderIf condition={search.location === EventLocation.OnSite}>
            <Field name="address" label="Address" icon={Icons.MAP_PIN} showClear mB />
          </RenderIf>
          <Field name="publisher" label="Publisher" icon={Icons.MEGAPHONE} showClear mB />
          <Field
            name="date"
            label="Date of the event"
            component={DateTimePicker}
            type="date-range"
            showOptions
            showClear
          />
        </Form>
      </Content>
    </StyledSearch>
  );
};

export default FilterPanel;

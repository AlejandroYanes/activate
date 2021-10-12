import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { generateUID } from 'helpers';
import { notifyEventChannel } from 'event-center';
import { Layout, useAppLayout } from 'components/base-components/Configuration';
import Modal from 'components/base-components/Modal';
import { Button } from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import { Field, Form } from 'components/base-components/Form';
import { Option, Options } from 'components/base-components/Options';
import { DateTimePicker, Select } from 'components/base-components/Inputs';
import { EventLocation, Filters, initialFilters } from './types';

const categories = [
  { value: generateUID(), label: 'Kids friendly' },
  { value: generateUID(), label: 'Outdoor' },
  { value: generateUID(), label: 'Sports' },
  { value: generateUID(), label: 'Arts' },
  { value: generateUID(), label: 'Night Event' },
];

const FiltersModal: FunctionComponent = () => {
  const { goBack } = useHistory();
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const panelRef = useRef(undefined);
  const layout = useAppLayout();

  const handleChange = useCallback((nextValue) => setFilters(nextValue), []);

  const filter = useCallback(() => {
    notifyEventChannel('EVENTS_FILTERS_CHANGED', filters);
    goBack();
  }, [filters]);

  const modalSize = (
    (layout === Layout.DESKTOP && 'small') ||
    (layout === Layout.TABLET && 'medium') ||
    'mobile'
  );

  const footer = (
    <>
      <Button onClick={goBack} label="Cancel" variant="fill" color="background" mR />
      <Button onClick={filter} label="Apply filters" variant="fill" color="brand" />
    </>
  );

  return (
    <Modal
      title="Filters"
      footer={footer}
      onClose={goBack}
      size={modalSize}
      visible
    >
      <Form ref={panelRef} state={filters} onChange={handleChange}>
        <Text margin="0 0 6px 20px">Location</Text>
        <Field
          name="location"
          component={Options}
          color="brand"
          fullWidth
          highlight
        >
          <Option value={EventLocation.All} label="All" />
          <Option value={EventLocation.OnLine} label="Online" />
          <Option value={EventLocation.OnSite} label="Onsite" />
        </Field>
        <RenderIf condition={filters.location === EventLocation.OnSite}>
          <Field
            name="address"
            label="Address"
            icon="MAP_PIN"
            showClear
          />
        </RenderIf>
        <Field
          name="date"
          label="Date of the event"
          component={DateTimePicker}
          type="date-range"
          showOptions
          showClear
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
        />
      </Form>
    </Modal>
  );
};

export default FiltersModal;


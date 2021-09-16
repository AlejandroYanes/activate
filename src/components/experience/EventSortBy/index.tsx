import React, { FunctionComponent, useState } from 'react';
import { Select, SelectOption } from 'components/base-components/Inputs';

interface Props {
  hideLabel?: boolean;
}

const options: SelectOption[] = [
  { value: 'interests', label: 'Interests' },
  { value: 'trending', label: 'Trending' },
  { value: 'friends', label: 'Friends' },
  { value: 'date', label: 'Date' },
  { value: 'location', label: 'Location' },
];

const EventSortBy: FunctionComponent<Props> = (props) => {
  const { hideLabel } = props;
  const [sortBy, setSortBy] = useState(options[0]);

  return (
    <Select
      inline={!hideLabel}
      label={!hideLabel ? 'Sort By:' : undefined}
      value={sortBy}
      options={options}
      onChange={setSortBy}
    />
  );
};

export default EventSortBy;

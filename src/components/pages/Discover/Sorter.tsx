import React, { FunctionComponent, useState } from 'react';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';
import { Select, SelectOption } from 'components/base-components/Inputs';

const options: SelectOption[] = [
  { value: 'interests', label: 'Interests' },
  { value: 'trending', label: 'Trending' },
  { value: 'friends', label: 'Friends' },
  { value: 'date', label: 'By Date' },
  { value: 'location', label: 'Location' },
];

const Sorter: FunctionComponent = () => {
  const [sortBy, setSortBy] = useState(options[0]);

  return (
    <FlexBox align="center">
      <Text padding="0 8px 0 0">Sort by:</Text>
      <Select value={sortBy} options={options} onChange={setSortBy} />
    </FlexBox>
  );
};

export default Sorter;

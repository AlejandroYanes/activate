import React, { FunctionComponent, useState } from 'react';
import { Input, Select, SelectOption } from 'components/base-components/Inputs';
import FlexBox from 'components/base-components/FlexBox';
import { Text } from 'components/base-components/Typography';
import { QueryBox as StyledQueryBox } from './styled';

const options: SelectOption[] = [
  { value: 'interests', label: 'Interests' },
  { value: 'trending', label: 'Trending' },
  { value: 'friends', label: 'Friends' },
  { value: 'date', label: 'By Date' },
  { value: 'location', label: 'Location' },
];

const QueryBox: FunctionComponent = () => {
  const [sortBy, setSortBy] = useState(options[0]);
  const [search, setSearch] = useState('');

  return (
    <StyledQueryBox>
      <Input
        id="search-box"
        value={search}
        onChange={setSearch}
        placeholder="Search for anything"
      />
      <FlexBox width={208} align="center">
        <Text padding="0 8px 0 0">Sort by:</Text>
        <Select value={sortBy} options={options} onChange={setSortBy} />
      </FlexBox>
    </StyledQueryBox>
  );
};

export default QueryBox;

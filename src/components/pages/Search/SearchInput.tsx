import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { generateQueryString, parseSearchQuery } from 'helpers';
import { Input, Select, SelectOption } from 'components/base-components/Inputs';
import { SearchParam, SearchType } from './types';
import { InputGroup } from './styled';

const options: SelectOption[] = [
  { value: SearchType.EVENTS, label: 'Events' },
  { value: SearchType.PUBLISHERS, label: 'Publishers' },
  { value: SearchType.USERS, label: 'Users' },
];

const SearchInput: FunctionComponent = () => {
  const { location: { search }, push } = useHistory();
  const [term, setTerm] = useState(() => (
    parseSearchQuery<SearchParam>(search).term || ''
  ));

  const option = useMemo(() => {
    const { type } = parseSearchQuery<SearchParam>(search);
    return options.find(op => op.value === type) || options[0];
  }, [search]);

  const handleOptionChange = useCallback((option: SelectOption) => {
    const queryParam = generateQueryString({
      filters: {
        term,
        type: option.value,
      },
    });
    push(`/app/search?${queryParam}`);
  }, [term]);

  const handleSearch = useCallback((searchTerm) => {
    const queryParam = generateQueryString({
      filters: {
        term: searchTerm,
        type: option.value,
      },
    });
    push(`/app/search?${queryParam}`);
  }, [option]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const { ctrlKey, altKey, shiftKey, key } = event;
    const noModifiers = !ctrlKey && !altKey && !shiftKey;

    if (noModifiers && key === 'Enter') {
      handleSearch(term);
    }
  }, [term, handleSearch]);

  return (
    <InputGroup margin="24px 0 32px 0">
      <Input
        id="term"
        icon="SEARCH"
        placeholder="You can type names, addresses..."
        value={term}
        onChange={setTerm}
        onKeyDown={handleKeyDown}
      />
      <Select
        id="option"
        value={option}
        options={options}
        onChange={handleOptionChange}
      />
      {/*<Button*/}
      {/*  onClick={handleSearch}*/}
      {/*  id="search-button"*/}
      {/*  label="Search"*/}
      {/*  variant="fill"*/}
      {/*  color="brand"*/}
      {/*/>*/}
    </InputGroup>
  );
};

export default SearchInput;

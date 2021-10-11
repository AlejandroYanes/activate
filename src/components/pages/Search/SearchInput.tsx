import { FunctionComponent, useCallback, useState } from 'react';
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
  const [option, setOption] = useState(() => {
    const { type } = parseSearchQuery<SearchParam>(search);
    return options.find(op => op.value === type) || options[0];
  });

  const handleOptionChange = useCallback((nextOption: SelectOption) => {
    if (term) {
      const queryParam = generateQueryString({
        filters: {
          term: term,
          type: nextOption.value,
        },
      });
      push(`/app/search?${queryParam}`);
    }

    setOption(nextOption);
  }, [term]);

  const handleSearch = useCallback((searchTerm) => {
    if (searchTerm) {
      const queryParam = generateQueryString({
        filters: {
          term: searchTerm,
          type: option.value,
        },
      });
      push(`/app/search?${queryParam}`);
    }
  }, [option]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const { ctrlKey, altKey, shiftKey, key } = event;
    const noModifiers = !ctrlKey && !altKey && !shiftKey;

    if (noModifiers && key === 'Enter') {
      handleSearch(term);
    }
  }, [term, handleSearch]);

  return (
    <InputGroup>
      <Input
        id="term"
        icon="SEARCH"
        value={term}
        onChange={setTerm}
        onKeyDown={handleKeyDown}
      />
      <div id="divider" />
      <Select
        id="option"
        value={option}
        options={options}
        onChange={handleOptionChange}
      />
    </InputGroup>
  );
};

export default SearchInput;

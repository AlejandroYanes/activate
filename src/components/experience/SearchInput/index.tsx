import React, { FunctionComponent, useState } from 'react';
import { getEventValue, PositionProps } from 'helpers';
import Colors from 'styles/colors';
import { Input } from 'components/base-components/Inputs';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';

const searchIcon = <SvgIcon icon={Icons.SEARCH} color={Colors.GRAY} />;
const closeIcon = <SvgIcon icon={Icons.CLOSE} color={Colors.GRAY} />;

const SearchInput: FunctionComponent<PositionProps> = (props) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => setSearch(getEventValue(event));

  return (
    <Input
      leftItems={[searchIcon]}
      rightItems={[closeIcon]}
      placeholder="Search"
      value={search}
      onChange={handleSearchChange}
      mB
      {...props}
    />
  );
};

export default SearchInput;

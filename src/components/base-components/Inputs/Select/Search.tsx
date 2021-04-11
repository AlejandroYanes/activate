import { FunctionComponent, useRef } from 'react';
import { StyledSearch } from './styled/search';
import FlexBox from '../../FlexBox';
import SvgIcon, { Icons } from '../../SvgIcon';
import { useAppColors } from '../../../providers/Theme';
import { useFocusState } from '../../../../hooks/UI';

interface Props {
  value: string;
  onChange: (event) => void;
}

const Search: FunctionComponent<Props> = (props) => {
  const { value, onChange } = props;
  const colors = useAppColors();
  const inputRef = useRef(undefined);
  const isFocus = useFocusState(inputRef);

  return (
    <FlexBox align="center" padding="10px 16px 10px 32px" width="100%">
      <SvgIcon
        icon={Icons.SEARCH}
        color={isFocus ? colors.BRAND_FONT :colors.GRAY}
      />
      <StyledSearch
        ref={inputRef}
        type="text"
        name="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </FlexBox>
  );
};

export default Search;

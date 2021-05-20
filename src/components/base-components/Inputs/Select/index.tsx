import {
  FunctionComponent,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { getEventValue } from 'helpers';
import { useHoverState } from 'hooks/UI';
import FlexBox from 'components/base-components/FlexBox';
import { InputProps } from '../types';
import InputLabel from '../base/Label';
import InputIcon from '../base/Icon';
import OptionsTray from './OptionsTray';
import RightNode from './RightNode';
import { Content, TrayContainer } from './styled';
import Label from './Label';

export interface SelectOption {
  value: string;
  label: string | ReactNode;
  [x: string]: any;
}

interface Props extends InputProps {
  value: SelectOption | SelectOption[];
  options: SelectOption[];
  multiple?: boolean;
  isLoading?: boolean;
  showSearch?: boolean;
  anchorTo?: MutableRefObject<any>;
}

const Select: FunctionComponent<Props> = (props) => {
  const {
    label,
    icon,
    options,
    value,
    onChange,
    multiple,
    isLoading,
    showClear,
    showSearch,
    anchorTo,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const menuRef = useRef(undefined);
  const isHovered = useHoverState(menuRef);

  const togglePopup = useCallback(() => setIsOpen((old) => !old), []);

  const handleSearch = useCallback(
    (event) => setSearch(getEventValue(event)),
    [],
  );

  const handleOptionClick = useCallback((option) => {
    if (multiple) {
      const isSelected = value.some((v) => v.value === option.value);
      const nextValue = isSelected
        ? value.filter(o => o.value !== option.value)
        : value.concat([option]);

      onChange(nextValue);
    } else {
      setIsOpen(false);
      onChange(option);
    }
  }, [value, multiple, onChange]);

  useEffect(() => {
    if (isOpen) {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <FlexBox direction="column" width="100%" ref={menuRef} {...rest}>
      <InputLabel text={label} />
      <Content paddLeft={!!icon} onClick={togglePopup}>
        <InputIcon icon={icon} />
        <Label value={value} />
        <RightNode
          isOpen={isOpen}
          isLoading={isLoading}
          isHovered={isHovered}
          showClear={showClear}
          multiple={multiple}
          value={value}
          onChange={onChange}
        />
      </Content>
      <TrayContainer data-el="select-tray-container">
        <OptionsTray
          anchorTo={anchorTo}
          isOpen={isOpen}
          isLoading={isLoading}
          value={value}
          options={options}
          onOptionClick={handleOptionClick}
          showSearch={showSearch}
          search={search}
          onSearch={handleSearch}
        />
      </TrayContainer>
    </FlexBox>
  );
};

export default Select;
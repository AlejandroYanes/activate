import React, { FunctionComponent, useCallback } from 'react';
import { useAppColors } from 'components/providers/Theme';
import RenderIf from 'components/base-components/RenderIf';
import { Icons } from 'components/base-components/SvgIcon';
import { Text } from 'components/base-components/Typography';
import { useOptionsContext } from './context';
import { Option as StyledOption, Label, Icon, Mark } from './styled';

interface Props {
  value: string;
  label: string;
  icon?: Icons;
}

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const Option: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const { value, label, icon } = props;
  const { color, size, value: selectedValue, onChange } = useOptionsContext();
  const isSelected = value === selectedValue;

  const handleOnClick = useCallback(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <StyledOption
      role="button"
      tabIndex={0}
      onClick={handleOnClick}
      size={size}
      color={color}
    >
      <Label>
        <RenderIf condition={!!icon}>
          <Icon icon={icon} size={size} color={isSelected ? Colors.WHITE : Colors.FONT} />
        </RenderIf>
        <Text size={size} color={isSelected ? 'white' : 'font'}>{label}</Text>
      </Label>
      <RenderIf condition={isSelected}>
        <Mark
          color={color}
          layoutId="optionMarker"
          initial={false}
          transition={spring}
          data-el="option-mark"
        />
      </RenderIf>
    </StyledOption>
  );
};

export default Option;

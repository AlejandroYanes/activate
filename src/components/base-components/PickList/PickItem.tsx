import React, { FunctionComponent, useCallback } from 'react';
import { useAppTheme } from 'components/providers/Theme';
import RenderIf from 'components/base-components/RenderIf';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { usePickListContext } from './context';
import { Mark, StyledItem, Touchable } from './styled/item';

interface Props {
  value: string;
  dashed?: boolean;
}

const PickItem: FunctionComponent<Props> = (props) => {
  const { colors: Colors } = useAppTheme();
  const { value, dashed, children } = props;
  const {
    value: selectedValue,
    onChange,
    size,
    color,
    multiple,
    readonly,
  } = usePickListContext();

  const handleOnClick = useCallback(() => onChange(value), [onChange, value]);

  const isSelected = (
    multiple
      ? (selectedValue as string[]).some(v => v === value)
      : selectedValue === value
  );

  return (
    <StyledItem tabIndex={-1} size={size}>
      <Touchable
        tabIndex={readonly ? -1 : 0}
        color={color}
        dashed={dashed}
        readonly={readonly}
        isSelected={isSelected}
        onClick={handleOnClick}
        data-pick-item-value={value}
        data-pick-item-selected={isSelected}
      >
        {children}
        <RenderIf condition={isSelected}>
          <Mark color={color} data-el="pick_item-mark">
            <SvgIcon
              icon={Icons.CHECK_MARK}
              color={Colors.WHITE}
            />
          </Mark>
        </RenderIf>
      </Touchable>
    </StyledItem>
  );
};

export default PickItem;

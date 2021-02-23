import React, { FunctionComponent, useCallback } from 'react';
import { useAppTheme } from 'components/providers/Theme';
import RenderIf from 'components/base-components/RenderIf';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { usePickListContext } from './context';
import { Mark, StyledItem, Touchable } from './styled';

interface Props {
  value: string;
}

const PickItem: FunctionComponent<Props> = (props) => {
  const { colors: Colors, useDarkStyle } = useAppTheme();
  const { value, children } = props;
  const {
    value: selectedValue,
    onChange,
    size,
    color,
  } = usePickListContext();

  const handleOnClick = useCallback(() => onChange(value), [onChange, value]);

  const isSelected = selectedValue === value;

  return (
    <StyledItem tabIndex={-1} size={size}>
      <Touchable
        onClick={handleOnClick}
        color={color}
        isSelected={isSelected}
        data-pick-item-selected={isSelected}
      >
        {children}
        <RenderIf condition={isSelected}>
          <Mark color={color}>
            <SvgIcon icon={Icons.CHECK_MARK} color={useDarkStyle ? Colors.ACCENT : Colors.WHITE} />
          </Mark>
        </RenderIf>
      </Touchable>
    </StyledItem>
  );
};

export default PickItem;

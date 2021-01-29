import React, { FunctionComponent, useCallback } from 'react';
import { useAppColors } from 'components/providers/Theme';
import RenderIf from 'components/base-components/RenderIf';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { usePickListContext } from './context';
import { StyledItem, Touchable, Mark } from './styled';

interface Props {
  value: string;
}

const PickItem: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
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
      <Touchable onClick={handleOnClick} color={color} isSelected={isSelected}>
        {children}
        <RenderIf condition={isSelected}>
          <Mark color={color}>
            <SvgIcon icon={Icons.CHECK_MARK} color={Colors.WHITE} />
          </Mark>
        </RenderIf>
      </Touchable>
    </StyledItem>
  );
};

export default PickItem;

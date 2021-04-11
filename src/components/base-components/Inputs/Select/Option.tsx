import { FunctionComponent, useMemo, useRef } from 'react';
import { useHoverState } from 'hooks/UI';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { SelectOption } from './index';
import { StyledOption, OptionIcon } from './styled/option';

interface Props {
  isSelected: boolean;
  option: SelectOption;
  onClick: (event) => void;
}

const Option: FunctionComponent<Props> = (props) => {
  const { isSelected, option, onClick } = props;
  const colors = useAppColors();
  const optionRef = useRef(undefined);
  const isHovered = useHoverState(optionRef);

  const handleOnClick = () => onClick(option);

  const iconColor = useMemo(() => {
    if (isHovered) {
      return colors.WHITE;
    }

    return isSelected ? colors.BRAND_FONT : colors.FONT;
  }, [colors, isHovered, isSelected]);

  return (
    <StyledOption
      role="button"
      ref={optionRef}
      isSelected={isSelected}
      onClick={handleOnClick}
    >
      <RenderIf condition={isSelected}>
        <OptionIcon>
          <SvgIcon
            icon={Icons.CHECK_MARK}
            color={iconColor}
          />
        </OptionIcon>
      </RenderIf>
      <span data-el="option-content">{option.label}</span>
    </StyledOption>
  );
};

export default Option;

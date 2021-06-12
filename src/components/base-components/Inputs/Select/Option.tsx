import { FunctionComponent, useRef } from 'react';
import { useHoverState } from 'hooks/UI';
import SvgIcon from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { OptionIcon, StyledOption } from './styled/option';
import { SelectOption } from './index';

interface Props {
  isSelected: boolean;
  option: SelectOption;
  onClick: (event) => void;
}

const Option: FunctionComponent<Props> = (props) => {
  const { isSelected, option, onClick } = props;
  const optionRef = useRef(undefined);
  const isHovered = useHoverState(optionRef);

  const handleOnClick = () => onClick(option);

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
            icon="CHECK_MARK"
            color={isHovered ? 'BACKGROUND_LIGHTER' : 'BRAND_FONT'}
          />
        </OptionIcon>
      </RenderIf>
      <span data-el="option-content">{option.label}</span>
    </StyledOption>
  );
};

export default Option;

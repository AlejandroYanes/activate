import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { Wrapper, Dot } from './styled/spinning-dots';

interface Props extends PositionProps {
  flat?: boolean;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'page';
}

const SpinningDots: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const { flat, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <Dot color={flat ? Colors.WHITE : Colors.BRAND_LIGHT} />
      <Dot color={flat ? Colors.WHITE : Colors.ACCENT_LIGHT} />
      <Dot color={flat ? Colors.WHITE : Colors.INFO_LIGHT} />
      <Dot color={flat ? Colors.WHITE : Colors.ERROR_LIGHT} />
    </Wrapper>
  );
};

SpinningDots.defaultProps = {
  size: 'medium',
};

export default SpinningDots;

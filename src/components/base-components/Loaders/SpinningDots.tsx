import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { Wrapper, Dot } from './styled/spinning-dots';

interface Props extends PositionProps {
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'page';
  color?: 'brand' | 'accent' | 'font' | 'white';
}

const SpinningDots: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  const { color, ...rest } = props;

  return (
    <Wrapper {...rest}>
      <Dot color={color ? Colors[color.toUpperCase()] : Colors.INFO} />
      <Dot color={color ? Colors[color.toUpperCase()] : Colors.SUCCESS} />
      <Dot color={color ? Colors[color.toUpperCase()] : Colors.WARNING} />
      <Dot color={color ? Colors[color.toUpperCase()] : Colors.ERROR} />
    </Wrapper>
  );
};

SpinningDots.defaultProps = {
  size: 'medium',
};

export default SpinningDots;

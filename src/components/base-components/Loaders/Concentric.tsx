import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { useAppColors } from 'components/providers/Theme';
import { Wrapper, Circle } from './styled/concentric';

interface Props extends PositionProps {
  size: 'small' | 'medium' | 'large' | 'page';
}

const Concentric: FunctionComponent<Props> = (props) => {
  const Colors = useAppColors();
  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 340"
      strokeLinecap="round"
      {...props}
    >
      <Circle cx="170" cy="170" r="160" stroke={Colors.BRAND} />
      <Circle cx="170" cy="170" r="135" stroke={Colors.ACCENT} />
      <Circle cx="170" cy="170" r="110" stroke={Colors.SUCCESS} />
      <Circle cx="170" cy="170" r="85" stroke={Colors.ERROR} />
    </Wrapper>
  );
};

Concentric.defaultProps = {
  size: 'medium',
};

export default Concentric;

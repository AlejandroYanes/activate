import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { H1, H2, H3 } from './styled/title';

interface Props extends PositionProps {
  level?: 1 | 2 | 3;
  color?: 'brand' | 'accent' | 'font' | 'secondary';
  align?: 'left' | 'center' | 'right';
  weight?: 'thin' | 'normal' | 'bold';
  ellipsis?: boolean;
}

const componentMap = {
  1: H1,
  2: H2,
  3: H3,
};

const Title: FunctionComponent<Props> = (props) => {
  const { level, children, ...rest } = props;
  const Component = componentMap[level];

  return (
    <Component level={level} {...rest}>{children}</Component>
  );
};

Title.defaultProps = {
  level: 1,
  color: 'font',
  align: 'left',
  weight: 'normal',
};

export default Title;

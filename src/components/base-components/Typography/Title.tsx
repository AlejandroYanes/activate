import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Title as StyledTitle } from './styled/title';

interface Props extends PositionProps {
  bold?: boolean;
  level?: 1 | 2 | 3;
  color?: 'brand' | 'accent' | 'font';
  align?: 'left' | 'center' | 'right';
}

const Title: FunctionComponent<Props> = (props) => {
  const { level, children, ...rest } = props;

  return (
    <StyledTitle as={`h${level}` as any} level={level} {...rest}>{children}</StyledTitle>
  );
};

Title.defaultProps = {
  level: 1,
  color: 'font',
  align: 'left',
};

export default Title;

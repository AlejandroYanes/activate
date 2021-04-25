import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Text as StyledText } from './styled/text';

interface Props extends PositionProps {
  weight?: 'lighter' | 'normal' | 'bold';
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'white' | 'font' | 'secondary' | 'background' | 'error';
  align?: 'left' | 'center' | 'right';
  as?: string;
}

const Text: FunctionComponent<Props> = (props) => {
  const { children, as, ...rest } = props;

  return (
    <StyledText as={as as any} {...rest}>{children}</StyledText>
  );
};

Text.defaultProps = {
  color: 'font',
  weight: 'normal',
  size: 'medium',
  as: 'span'
};

export default Text;

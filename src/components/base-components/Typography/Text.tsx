import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Text as StyledText } from './styled/text';

interface Props extends PositionProps {
  weight?: 'lighter' | 'normal' | 'bold';
  size?: 'small' | 'medium' | 'large';
  secondary?: boolean;
}

const Text: FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledText {...rest}>{children}</StyledText>
  );
};

Text.defaultProps = {
  secondary: false,
  weight: 'normal',
  size: 'medium',
};

export default Text;

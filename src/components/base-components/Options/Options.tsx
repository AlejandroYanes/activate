import React, { FunctionComponent } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'helpers';
import { OptionsProvider } from './context';
import { Options as StyledOptions } from './styled';

interface Props extends PositionProps {
  value: string;
  onChange: (value) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
}

const Options: FunctionComponent<Props> = (props) => {
  const { value, onChange, size, color, children, ...rest } = props;

  return (
    <StyledOptions {...rest}>
      <OptionsProvider value={value} onChange={onChange} size={size} color={color}>
        <AnimateSharedLayout>
          {children}
        </AnimateSharedLayout>
      </OptionsProvider>
    </StyledOptions>
  );
};

Options.defaultProps = {
  color: 'brand',
  size: 'medium',
};

export default Options;

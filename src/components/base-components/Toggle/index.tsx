import React, { FunctionComponent, ReactNode } from 'react';
import { PositionProps } from 'helpers';
import {
  FauxContainer,
  FauxNob,
  FauxOffSide,
  FauxOnSide,
  FauxSlide,
  HiddenInput,
  StyledToggle,
} from './styled';

interface Props extends PositionProps {
  nobNode?: ReactNode;
  label: string;
  value: boolean;
  onChange: (event) => void;
}

const Toggle: FunctionComponent<Props> = (props) => {
  const { nobNode, label, value, onChange, ...rest } = props;

  const fauxOffPosition = value ? 100 : 0;
  const fauxOnPosition = !value ? -100 : 0;
  const nobPosition = value ? '50%' : '2px';

  return (
    <StyledToggle {...rest}>
      <HiddenInput />
      <FauxContainer data-el="faux-container" onClick={onChange}>
        <FauxSlide data-el="faux-slide">
          <FauxOnSide data-el="faux-on-side" position={fauxOnPosition} />
          <FauxOffSide data-el="faux-off-side" position={fauxOffPosition} />
          <FauxNob data-el="faux-nob" position={nobPosition}>
            {nobNode}
          </FauxNob>
        </FauxSlide>
      </FauxContainer>
      {label}
    </StyledToggle>
  );
};

export default Toggle;

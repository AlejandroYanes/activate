import React, { FunctionComponent, ReactNode } from 'react';
import { PositionProps } from 'helpers';
import { Text } from 'components/base-components/Typography';
import {
  FauxContainer,
  FauxNob,
  HiddenInput,
  StyledToggle,
} from './styled';
import RenderIf from '../RenderIf';

interface Props extends PositionProps {
  nobNode?: ReactNode;
  label?: string;
  value: boolean;
  onChange: (event) => void;
}

const springAnimation = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const Toggle: FunctionComponent<Props> = (props) => {
  const { nobNode, label, value, onChange, ...rest } = props;

  return (
    <StyledToggle {...rest}>
      <HiddenInput type="checkbox" checked={value} readOnly />
      <FauxContainer
        tabIndex={0}
        role="checkbox"
        data-el="faux-container"
        checked={value}
        onClick={onChange}
      >
        <FauxNob layout transition={springAnimation} data-el="faux-nob">
          {nobNode}
        </FauxNob>
      </FauxContainer>
      <RenderIf condition={!!label}>
        <Text padding="0 0 0 8px">{label}</Text>
      </RenderIf>
    </StyledToggle>
  );
};

export default Toggle;

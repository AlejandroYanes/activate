import React, { FunctionComponent, ReactNode } from 'react';
import { PositionProps } from 'components/_base';
import { StyledContainer, StyledInput, AbsoluteContent } from './styled';

interface Props extends PositionProps {
  id?: string;
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (event) => void;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  leftItems?: ReactNode[];
  rightItems?: ReactNode[];
}

const Input: FunctionComponent<Props> = (props) => {
  const { mT, mR, mB, mL, className, style, leftItems, rightItems, ...rest } = props;
  return (
    <StyledContainer mT={mT} mR={mR} mB={mB} mL={mL} className={className} style={style}>
      <AbsoluteContent>
        {leftItems}
      </AbsoluteContent>
      <StyledInput
        leftItems={leftItems.length}
        rightItems={rightItems.length}
        {...rest}
      />
      <AbsoluteContent floatRight>
        {rightItems}
      </AbsoluteContent>
    </StyledContainer>
  );
};

Input.defaultProps = {
  leftItems: [],
  rightItems: [],
};

export default Input;

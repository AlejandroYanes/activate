import styled, { css } from 'styled-components';
import { getPositionStyles } from 'helpers';

const getAbsoluteStyles = (props) => {
  const { top, right, bottom, left } = props;

  return css`
    top: ${typeof top === 'number' ? `${top}px` : top};
    right: ${typeof right === 'number' ? `${right}px` : right};
    bottom: ${typeof bottom === 'number' ? `${bottom}px` : bottom};
    left: ${typeof left === 'number' ? `${left}px` : left};
  `;
};

export const StyledAbsolute = styled.div`
  position: absolute;
  ${getAbsoluteStyles};
  ${getPositionStyles};
`;

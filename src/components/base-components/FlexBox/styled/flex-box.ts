import styled, { css } from 'styled-components';
import { getMargins } from 'helpers';

const getLayoutStyles = (props) => {
  const { direction, align, justify, width, height } = props;

  return css`
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
  `;
};

export const StyledFlexBox = styled.div`
  display: flex;
  ${getLayoutStyles};
  ${getMargins}
`;

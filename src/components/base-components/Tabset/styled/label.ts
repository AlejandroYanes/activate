import styled, { css } from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const getWidthStyles = (props) => {
  const { compact, isSelected, spaced } = props;

  if (compact) {
    if (isSelected) {
      return css`
        margin-left: ${spaced ? '8px' : '0'};
        width: auto;
      `;
    }

    return css`
      width: 0;
      margin-left: 0;
      overflow: hidden;
    `;
  }

  return css`
    margin-left: ${spaced ? '8px' : '0'};
    width: auto;
  `;
};

export const Label = styled.span.attrs(anyPropsAttrs)`
  ${getWidthStyles};
  color: ${({ theme }) => theme.colors.BRAND};
  white-space: nowrap;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  transition: all 150ms linear;
`;

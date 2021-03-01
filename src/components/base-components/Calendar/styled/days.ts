import styled, { css } from 'styled-components';

export const StyledDays = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  box-sizing: border-box;
`;

export const StyledWeekDay = styled.th`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: 16px;
  font-weight: lighter;
`;

export const StyledDay = styled.td`
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    height: 42px;
    min-height: 42px;
`;

const getBasicStyles = (props) => {
  const { disabled, isSelected, isHighlighted, theme: { colors } } = props;

  if (disabled) {
    return 'pointer-event: none';
  }

  if (isSelected) {
    return `
      background-color: ${colors.BRAND};
      color: ${colors.WHITE};
      cursor: pointer;
    `;
  }

  if (isHighlighted) {
    return `
      background-color: ${colors.BRAND_SHADE};
      color: ${colors.BRAND_FONT};
      cursor: pointer;
    `;
  }

  return `
    cursor: pointer;
  `;
};

const getHoverStyle = (props) => {
  const { disabled, isSelected, isHighlighted, theme: { colors } } = props;

  if (disabled) {
    return undefined;
  }

  if (isSelected) {
    return css`
      background-color: ${colors.BRAND_HIGHLIGHT};
      color: ${colors.WHITE};
    `;
  }

  if (isHighlighted) {
    return css`
      color: ${colors.BRAND_FONT_HIGHLIGHT};
    `;
  }

  return `background-color: ${colors.GRAY_SHADE}`;
};

export const StyledDayButton = styled.button.attrs((props: any) => props)`
  font-size: 16px;
  outline: none;
  background-color: transparent;
  border-radius: 48px;
  line-height: 36px;
  height: 38px;
  min-height: 38px;
  width: 38px;
  min-width: 38px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.FONT};
  overflow: visible;
  text-transform: none;
  border: 1px solid transparent;
  ${getBasicStyles};

  &:hover {
    ${getHoverStyle};
  }
`;

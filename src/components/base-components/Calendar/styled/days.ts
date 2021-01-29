import styled from 'styled-components';

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
  const { disabled, isSelected, isHighlighted, theme: { useDarkStyle, colors } } = props;

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
      color: ${useDarkStyle ? colors.BRAND : colors.BRAND_DARK};
      cursor: pointer;
    `;
  }

  return `
    cursor: pointer;
  `;
};

const getHoverStyle = (props) => {
  const { disabled, isSelected, isHighlighted, theme } = props;

  if (disabled) {
    return undefined;
  }

  if (isSelected) {
    return `
      background-color: ${theme.colors.BRAND_DARK};
      color: ${theme.colors.WHITE};
    `;
  }

  if (isHighlighted) {
    return undefined;
  }

  return `background-color: ${theme.colors.GRAY_SHADE}`;
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

import styled from 'styled-components';
import Colors from 'styles/colors';

export const StyledDays = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  box-sizing: border-box;
`;

export const StyledWeekDay = styled.th`
  color: ${Colors.GRAY};
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
  const { disabled, isSelected, isHighlighted } = props;

  if (disabled) {
    return 'pointer-event: none';
  }

  if (isSelected) {
    return `
      background-color: ${Colors.BRAND};
      color: ${Colors.WHITE};
      cursor: pointer;
    `;
  }

  if (isHighlighted) {
    return `
      background-color: ${Colors.BRAND_SHADE};
      color: ${Colors.BRAND_DARK};
      cursor: pointer;
    `;
  }

  return `
    cursor: pointer;
  `;
};

const getHoverStyle = (props) => {
  const { disabled, isSelected, isHighlighted } = props;

  if (disabled) {
    return undefined;
  }

  if (isSelected) {
    return `
      background-color: ${Colors.BRAND_DARK};
      color: ${Colors.WHITE};
    `;
  }

  if (isHighlighted) {
    return undefined;
  }

  return `background-color: ${Colors.GRAY_SHADE}`;
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
  color: ${Colors.DARK};
  overflow: visible;
  text-transform: none;
  border: 1px solid transparent;
  ${getBasicStyles};

  &:hover {
    ${getHoverStyle};
  }
`;

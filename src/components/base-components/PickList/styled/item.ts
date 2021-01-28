import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const getColorStyles = (props) => {
  const { theme: { useDarkStyle, colors } } = props;

  if (useDarkStyle) {
    return `
      border: 1px solid ${colors.GRAY_DARK};
      &:hover {
        border-color: ${colors.GRAY};
      }
      &:focus {
        border-color: ${colors.ACCENT};
      }
    `;
  }

  return `
      border: 1px solid ${colors.GRAY};
      &:hover {
        border-color: ${colors.GRAY_DARK};
      }
      &:focus {
        border-color: ${colors.ACCENT};
      }
    `;
};

export const Touchable = styled.button`
  height: 100%;
  width: 100%;
  border-radius: 16px;
  ${getColorStyles};
`;

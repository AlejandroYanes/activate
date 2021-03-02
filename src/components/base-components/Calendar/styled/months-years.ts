import styled from 'styled-components';
import Button from 'components/base-components/Button';

export const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const getBasicStyles = (props) => {
  const { isSelected, theme: { colors } } = props;

  if (isSelected) {
    return `
    background-color: ${colors.BRAND};
    color: ${colors.WHITE};
    `;
  }
  return '';
};

const getHoverStyles = (props) => {
  const { isSelected, theme: { colors } } = props;

  if (isSelected) {
    return `
    background-color: ${colors.BRAND_HIGHLIGHT};
    color: ${colors.WHITE};
    `;
  }
  return '';
};

export const Item = styled(Button).attrs((props: any) => props)`
  width: 30%;
  ${getBasicStyles};

  &:hover {
    ${getHoverStyles};
  }
`;

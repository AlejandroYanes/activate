import styled from 'styled-components';
import Button from 'components/base-components/Button';

export const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const getBasicStyles = (props) => {
  const { isSelected, theme: { useDarkStyle, colors } } = props;

  if (isSelected) {
    return `
    background-color: ${useDarkStyle ? colors.BRAND_DARK : colors.BRAND};
    color: ${colors.WHITE};
    `;
  }
  return '';
};

const getHoverStyles = (props) => {
  const { isSelected, theme: { useDarkStyle, colors } } = props;

  if (isSelected) {
    return `
    background-color: ${useDarkStyle ? colors.BRAND : colors.BRAND_DARK};
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

import styled from 'styled-components';
import Colors from 'styles/colors';
import Button from 'components/base-components/Button';

export const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const getBasicStyles = (props) => {
  const { isSelected } = props;

  if (isSelected) {
    return `
    background-color: ${Colors.BRAND};
    color: ${Colors.WHITE};
    `;
  }
  return '';

  // return `
  //   background-color: transparent;
  //   color: ${Colors.GRAY};
  // `;
};

const getHoverStyles = (props) => {
  const { isSelected } = props;

  if (isSelected) {
    return `
    background-color: ${Colors.BRAND_DARK};
    color: ${Colors.WHITE};
    `;
  }
  return '';

  // return `
  //   color: ${Colors.GRAY_DARK};
  //   background-color: ${Colors.GRAY_SHADE};
  // `;
};

export const Item = styled(Button).attrs((props: any) => props)`
  width: 30%;
  //height: 32px;
  //font-size: 16px;
  //border-radius: 50px;
  //margin-bottom: 16px;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //cursor: pointer;
  ${getBasicStyles};

  &:hover {
    ${getHoverStyles};
  }
`;

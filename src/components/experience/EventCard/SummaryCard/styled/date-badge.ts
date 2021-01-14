import styled from 'styled-components';
import Colors from '../../../../../styles/colors';

const getDirection = (props) => {
  const { inverted } = props;

  if (inverted) {
    return `
      flex-direction: column-reverse;
      border-radius: 42px 42px 16px 16px;
      padding: 6px 6px 10px 6px;
      margin-top: 16px;
    `;
  }

  return `
      flex-direction: column;
      border-radius: 16px 16px 42px 42px;
      padding: 10px 6px 6px 6px;
    `;
};

export const DateBadge = styled.div.attrs((props: any) => props)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  ${getDirection};
  width: 70px;
  height: 86px;
  background-color: ${Colors.BRAND_LIGHT};

  & > span:nth-child(1) {
    font-size: 12px;
    color: ${Colors.GRAY};
  }

  & > span:nth-child(2) {
    font-size: 14px;
    color: ${Colors.DARK};
  }

  & > div {
    height: 1px;
    width: 30%;
    margin: 8px auto;
    background-color: ${Colors.DARK_GRAY};
  }

  & > span:nth-child(4) {
    font-size: 12px;
    color: ${Colors.DARK};
  }
`;

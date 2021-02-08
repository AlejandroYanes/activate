import styled from 'styled-components';
import { cardWidth } from 'styles/variables';
import { anyPropsAttrs, getMargins } from 'helpers';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${cardWidth};
  ${getMargins};
`;

export const ListContainer = styled.div`
  flex: 1;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const getCurve = ({ side }) => {
  if (side === 'right') {
    return `
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
    `;
  }

  return `
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  `;
};

export const Edge = styled.div.attrs(anyPropsAttrs)`
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  ${getCurve};
  box-sizing: border-box;
  height: 60px;
  display: flex;
  padding: 0 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

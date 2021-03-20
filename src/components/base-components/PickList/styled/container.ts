import styled from 'styled-components';
import { cardWidth } from 'styles/variables';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${cardWidth};
  ${getPositionStyles};
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

export const Edge = styled.div.attrs(anyPropsAttrs)`
  box-sizing: border-box;
  height: 60px;
  display: flex;
  padding: 0 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

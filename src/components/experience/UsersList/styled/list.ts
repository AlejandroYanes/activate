import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const Section = styled.section.attrs(anyPropsAttrs)`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ scroll }) => scroll ? 'height: 100%' : ''};
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 4px 0 16px;
  margin: 0;
  overflow: hidden auto;
`;

export const Action = styled.div`
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  border-radius: 50%;
  position: absolute;
  display: flex;
  bottom: 8px;
  right: 12px;
`;


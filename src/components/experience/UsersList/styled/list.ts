import styled from 'styled-components';
import {
  anyPropsAttrs,
  getBgdLightColor,
  getPositionStyles,
} from 'activate-components';

export const Section = styled.section.attrs(anyPropsAttrs)`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ scroll }) => scroll ? 'height: 100%' : ''};
  ${getPositionStyles};
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  //padding: 0 4px 0 16px;
  padding: 0;
  margin: 0;
  overflow: hidden auto;
`;

export const ActionNotch = styled.div`
  background-color: ${getBgdLightColor};
  border-radius: 50%;
  position: absolute;
  display: flex;
  bottom: 8px;
  right: 12px;
`;


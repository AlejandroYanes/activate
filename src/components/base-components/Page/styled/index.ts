import styled from 'styled-components';
import { cardWidth } from 'styles/variables';
import { anyPropsAttrs } from 'helpers';

export const StyledPage = styled.article`
  display: flex;
  flex-direction: column;
  width: ${cardWidth};
  margin-bottom: 32px;
  box-sizing: border-box;
`;

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ spaced }) => spaced ? '32px' : '0px'};
`;

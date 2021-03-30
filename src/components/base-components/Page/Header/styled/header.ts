import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ spaced }: any) => spaced ? '32px' : '0px'};
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

import styled from 'styled-components';
import { getMargins } from 'helpers';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  align-content: stretch;
  padding: 6px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  ${getMargins};
`;

export const Month = styled.li`
  text-align: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  cursor: default;
  margin: 0 6px;
  font-size: 14px;
  height: 48px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

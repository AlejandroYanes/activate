import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-content: stretch;
  padding: 6px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
`;

export const Month = styled.li`
  text-align: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  cursor: default;
  margin: 0 8px;
  font-size: 14px;
  line-height: 16px;
  height: 48px;
  color: ${({ theme }) => theme.colors.FONT_SECONDARY};
`;

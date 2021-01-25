import styled from 'styled-components';
import Colors from 'styles/colors';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  align-content: stretch;
  padding: 6px;
  border-radius: 16px;
  background-color: ${Colors.WHITE};
`;

export const Month = styled.li`
  text-align: center;
  writing-mode: vertical-rl;
  //text-orientation: upright;
  transform: rotate(180deg);
  cursor: default;
  margin: 0 6px;
  font-size: 14px;
  height: 48px;
  color: ${Colors.GRAY};
`;

import styled from 'styled-components';
import Colors from 'styles/colors';

export const ActionBlock = styled.li`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Colors.WHITE};
  background-color: ${({ theme }) => theme.colors.BRAND};
`;

export const EmptyBlock = styled.li`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BRAND};
`;

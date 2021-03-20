import styled from 'styled-components';
import { getPositionStyles } from 'helpers';

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding-bottom: 10px;
  ${getPositionStyles};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

export const Title = styled.label`
  color: ${({ theme }) => theme.colors.GRAY};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Separator = styled.div`
  margin: 6px auto;
  height: 1px;
  width: 94%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.GRAY_SHADE};
`;

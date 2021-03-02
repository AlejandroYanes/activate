import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.div`
  padding: 6px;
  border-radius: 6px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.GRAY_SHADE};
  text-transform: uppercase;
`;

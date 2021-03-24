import styled from 'styled-components';

export const DateBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  margin-right: 6px;
  margin-top: 4px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.GRAY_SHADE};

  & span:nth-child(1) {
    font-size: 10px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }

  & span:nth-child(2) {
    font-size: 14px;
  }
`;

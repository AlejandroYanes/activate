import styled from 'styled-components';

export const DateBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.GRAY_SHADE};

  & span:nth-child(1) {
    font-size: 10px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  & span:nth-child(2) {
    font-size: 14px;
  }
`;

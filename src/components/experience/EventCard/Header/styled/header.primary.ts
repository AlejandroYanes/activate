import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
`;

export const DateBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.GRAY_SHADE};

  & span:nth-child(1) {
    font-size: 12px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 6px;

  & span {
    margin-left: 4px;
    line-height: 20px;
  }
`;

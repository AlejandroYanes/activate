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
  height: 60px;
  width: 46px;
  background-color: ${({ theme }) => theme.colors.GRAY_SHADE};

  & span:nth-child(1) {
    font-size: 12px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  & span[data-short-date="false"] {
    font-size: 10px;
    margin-bottom: 8px;
  }
`;

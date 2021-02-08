import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px 16px 20px;
  margin-bottom: 32px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Top = styled.header`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 16px;
  margin-bottom: 20px;
  flex: 1;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  &:last-child {
    padding-right: 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

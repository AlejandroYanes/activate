import styled from 'styled-components';
import Colors from 'styles/colors';

export const Header = styled.header`
  display: flex;
  align-items: stretch;
`;

export const DateBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${Colors.GRAY_SHADE};

  & span:nth-child(1) {
    font-size: 12px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }
`;

export const TitleAndAddress = styled.div`
  display: block;
  width: 80%;
  margin-right: auto;
  padding-right: 16px;
`;

export const Title = styled.h3`
  margin: 0 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.FONT};
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;

  & span {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.FONT};
  }
`;

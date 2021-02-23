import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

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

export const Header = styled.header.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: ${({ asColumn }) => asColumn ? 'column' : 'row'};
`;

export const User = styled.div`
  display: flex;
  flex: 1;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 16px;
  margin-bottom: 20px;
`;

export const Stats = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: ${({ spaced }) => spaced ? '16px' : '0'};
`;

export const Stat = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ padded }) => padded ? '0 16px' : '0'};

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

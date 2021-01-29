import styled from 'styled-components';
import { getMargins } from 'helpers';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  border: 1px solid ${({ theme }) => theme.colors.BRAND_SHADE};
  ${getMargins}
`;

export const Title = styled.h3`
  margin: 16px 0;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.FONT};
`;

export const Address = styled.div`
  display: flex;
  align-items: center;

  & span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.FONT};
    margin-left: 4px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  border-radius: 2px;
  margin: 16px 0;
  background-color: ${({ theme }) => theme.colors.GRAY_SHADE};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

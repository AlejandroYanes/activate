import styled from 'styled-components';
import Colors from 'styles/colors';
import { getMargins } from 'helpers';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.BRAND_SHADE};
  ${getMargins}
`;

export const Title = styled.h3`
  margin: 0 0 6px;
  color: ${Colors.DARK};
`;

export const Address = styled.div`
  display: flex;
  align-items: center;

  & span {
    font-size: 12px;
    color: ${Colors.GRAY};
    margin-left: 4px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  border-radius: 2px;
  margin: 16px 0;
  background-color: ${Colors.GRAY_SHADE};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

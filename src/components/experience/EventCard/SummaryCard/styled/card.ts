import styled from 'styled-components';
import Colors from 'styles/colors';
import { getMargins } from 'helpers';

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-radius: 10px;
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.BRAND_SHADE};
  ${getMargins}
`;

export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
`;

export const Subheader = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

export const Description = styled.p``;

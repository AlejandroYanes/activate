import styled from 'styled-components';
import { getMargins } from 'helpers';

export const StyledNotification = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.BRAND_SHADE};
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  border-radius: 12px;
  padding: 12px;
  ${getMargins}
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const DateStamp = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-top: 6px;
`;

export const Message = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  line-height: 0.95rem;
`;

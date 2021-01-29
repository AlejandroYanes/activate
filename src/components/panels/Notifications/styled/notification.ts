import styled from 'styled-components';
import { motion } from 'framer-motion';
import Colors from 'styles/colors';
import { getMargins } from 'helpers';

export const StyledNotification = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
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
  color: ${Colors.GRAY};
  margin-top: 6px;
`;

export const Message = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  line-height: 0.95rem;
`;

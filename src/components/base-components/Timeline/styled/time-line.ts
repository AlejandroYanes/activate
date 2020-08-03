import styled from 'styled-components';
import { motion } from 'framer-motion';
import Colors from 'styles/colors';

export const StyledTimeline = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.875rem;
`;

export const Title = styled.h2`
  color: ${Colors.GRAY};
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

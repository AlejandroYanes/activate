import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 16px;
`;

export const StyledNotifications = styled(motion.section)`
  display: flex;
  flex-direction: column;
`;

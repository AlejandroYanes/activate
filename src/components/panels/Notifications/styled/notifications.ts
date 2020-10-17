import styled from 'styled-components';
import { motion } from 'framer-motion';
import SimpleBar from 'simplebar-react';

export const Wrapper = styled(SimpleBar)`
  height: 100%;
  padding: 0 16px;
`;

export const StyledNotifications = styled(motion.section)`
  display: flex;
  flex-direction: column;
`;

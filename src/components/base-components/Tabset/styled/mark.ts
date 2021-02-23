import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ZLevels } from 'styles/z-levels';

export const Mark = styled(motion.div)`
  height: 2px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.BRAND};
  position: absolute;
  bottom: 8px;
  left: max(12px, 15%);
  right: max(12px, 15%);
  z-index: ${ZLevels.dayComponentMark};
`;

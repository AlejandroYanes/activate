import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ZLevels } from 'styles/z-levels';

export const TabItem = styled.li`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Mark = styled(motion.div)`
  position: absolute;
  top: 2px;
  left: -24px;
  z-index: ${ZLevels.componentLevel1};
  //border-radius: 12px;
  // background-color: ${({ theme }) => theme.colors.BRAND};

  svg {
    transform: rotate(90deg) scale(0.9);
  }
`;

export const BubbleSVG = styled(motion.svg)`
  position: absolute;
  top: 0;
  transform: rotate(90deg);
`;

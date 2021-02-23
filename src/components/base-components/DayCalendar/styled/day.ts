import styled from 'styled-components';
import { motion } from 'framer-motion';
import Colors from 'styles/colors';
import { ZLevels } from 'styles/z-levels';

export const Day = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-size: 24px;
  border-radius: 8px;
  height: 48px;
  width: 48px;
  flex-shrink: 0;

  &:hover, &:focus {
    outline: none;
    background-color: ${Colors.GRAY_SHADE};
  }
`;

const getNumberColor = ({ isSelected, theme }) => (
  isSelected ? theme.colors.WHITE : theme.colors.FONT
);

export const DayNumber = styled.span.attrs((props: any) => props)`
  position: absolute;
  margin: auto;
  z-index: ${ZLevels.dayComponent};
  color: ${getNumberColor};
`;

export const Mark = styled(motion.div)`
  position: absolute;
  z-index: ${ZLevels.dayComponentMark};
  height: 74px;
  width: 48px;
  border-radius: 20px;
  pointer-events: none;
  border: 6px solid ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  background-color: ${({ theme }) => theme.colors.ACCENT};
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';
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
    background-color: ${({ theme }) => theme.colors.GRAY_SHADE};
  }
`;

const getNumberColor = ({ isSelected, theme }) => (
  isSelected ? theme.colors.WHITE : theme.colors.FONT
);

export const DayNumber = styled.span.attrs((props: any) => props)`
  position: absolute;
  margin: auto;
  z-index: ${ZLevels.componentLevel2};
  color: ${getNumberColor};
`;

export const Mark = styled(motion.div)`
  position: absolute;
  z-index: ${ZLevels.componentLevel1};
  height: 86px;
  width: 60px;
  border-radius: 20px;
  pointer-events: none;
  border: 6px solid ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  background-color: ${({ theme }) => theme.colors.ACCENT};
`;

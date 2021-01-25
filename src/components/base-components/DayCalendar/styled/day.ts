import styled from 'styled-components';
import { motion } from 'framer-motion';
import Colors from 'styles/colors';

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

  &:hover {
    background-color: ${Colors.GRAY_SHADE};
  }
`;

const getColor = ({ isSelected }) => isSelected ? Colors.WHITE : Colors.DARK;

export const DayNumber = styled.span.attrs((props: any) => props)`
  position: absolute;
  margin: auto;
  z-index: 2;
  color: ${getColor};
`;

export const Mark = styled(motion.div)`
  position: absolute;
  z-index: 1;
  height: 74px;
  width: 48px;
  border-radius: 20px;
  border: 6px solid white;
  background-color: ${Colors.BRAND};
`;

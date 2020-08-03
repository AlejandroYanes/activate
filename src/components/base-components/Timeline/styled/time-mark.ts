import styled from 'styled-components';
import { motion } from 'framer-motion';
import Colors from 'styles/colors';

const trackColor = Colors.DARK_GRAY;

export const Item = styled(motion.div)`
  display: flex;
  align-items: stretch;
  min-height: 54px;
`;

export const Track = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TrackMark = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background-color: ${trackColor};
  margin: 2px 0;
  transition: all 200ms linear;
`;

export const TrackLine = styled.div`
  background-color: ${trackColor};
  width: 1px;
  height: 96%;
  flex: 1;
  transition: all 200ms linear;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;
`;

export const DateLabel = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  min-width: 48px;
  color: ${trackColor};
`;

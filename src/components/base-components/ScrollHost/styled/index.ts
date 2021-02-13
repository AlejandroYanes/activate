import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getMargins } from 'helpers';

export const Host = styled.section`
  display: flex;
  align-items: stretch;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  ${getMargins};
`;

export const ScrollWrapper = styled.div`
  flex: 1;
  padding: 0 6px;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BarSection = styled.div`
  width: 6px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ScrollGuide = styled.div`
  width: 2px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_SHADE};
`;

export const ScrollThumb = styled(motion.div)`
  position: absolute;
  right: 3px;
  height: 20px;
  width: 4px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.GRAY};
  transition: all 50ms linear;

  &:hover {
    right: 2px;
    width: 6px;
  }
`;

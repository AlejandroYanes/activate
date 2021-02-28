import styled from 'styled-components';
import { motion } from 'framer-motion';
import { cardWidth } from 'styles/variables';
import { anyPropsAttrs, getShade } from 'helpers';

export const Notification = styled(motion.li)`
  padding: 16px;
  margin-top: 16px;
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  max-width: calc(${cardWidth} / 1.6);
  box-sizing: border-box;
  background-color: ${({ theme }) => getShade(theme.colors.FONT_DARK, 0.8)};
  backdrop-filter: blur(8px);

  &:last-child {
    margin-top: 32px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const Icon = styled.div.attrs(anyPropsAttrs)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { cardWidth } from 'styles/variables';
import { anyPropsAttrs } from 'helpers';
import { Text } from 'components/base-components/Typography';

export const Notification = styled(motion.li)`
  padding: 16px;
  margin-top: 16px;
  border-radius: 16px;
  display: flex;
  align-items: flex-start;
  width: ${cardWidth};
  max-width: ${cardWidth};
  background-color: ${({ color }) => color};
`;

export const Message = styled(Text)`
  flex: 1;
  margin-top: 4px;
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

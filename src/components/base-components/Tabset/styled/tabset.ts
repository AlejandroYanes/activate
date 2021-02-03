import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getMargins } from 'helpers';

export const StyledTabset = styled(motion.ul).attrs((props: any) => props)`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: transparent;
  ${getMargins};
`;

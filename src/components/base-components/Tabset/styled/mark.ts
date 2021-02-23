import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Mark = styled(motion.div)`
  height: 2px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.BRAND};
  position: absolute;
  bottom: 8px;
  left: 12px;
  right: 12px;
}
`;

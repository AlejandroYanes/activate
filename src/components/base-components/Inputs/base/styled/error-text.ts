import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getErrorFontColor } from 'helpers';

export const StyledErrorText = styled(motion.span)`
  font-size: 13px;
  color: ${getErrorFontColor};
  padding: 8px 20px 0 20px;
`;

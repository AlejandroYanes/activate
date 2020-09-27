import styled from 'styled-components';
import { motion } from 'framer-motion';
import Colors from '../../../../styles/colors';

export const StyledActionHolder = styled.div`
  position: absolute;
  top: 0;
  left: -80px;
  width: 80px;
  height: 100%;

  svg {
    height: 100%;
  }
`;

export const StyledAction = styled(motion.div)`
  position: absolute;
  top: 74px;
  right: 0;
  width: 90px;
  display: flex;
  justify-content: flex-end;
`;

export const StyledActionPage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  clip-path: url(#clippingBox);
  background-color: ${Colors.SUCCESS};
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

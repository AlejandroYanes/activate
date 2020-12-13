import styled from 'styled-components';
import { Levels } from 'styles/levels';

export const StyledBackdrop = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${Levels.backdrop};
  background-color: rgba(0, 0, 0, 0.4);
`;

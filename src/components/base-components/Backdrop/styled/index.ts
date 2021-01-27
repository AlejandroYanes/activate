import styled from 'styled-components';
import { ZLevels } from 'styles/z-levels';
import { getShade } from 'helpers';

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
  z-index: ${ZLevels.backdrop};
  background-color: ${({ theme }) => getShade(theme.colors.FONT, 0.4)};
`;

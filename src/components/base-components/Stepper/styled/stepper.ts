import styled from 'styled-components';
import { getPositionStyles } from 'helpers';

export const StyledStepper = styled.article`
  display: flex;
  ${getPositionStyles};
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  min-width: 0;
  flex: 1;
`;

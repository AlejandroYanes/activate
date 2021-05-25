import styled from 'styled-components';
import { getBgdLightColor } from 'helpers';

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 24px;
  background-color: ${getBgdLightColor};
`;

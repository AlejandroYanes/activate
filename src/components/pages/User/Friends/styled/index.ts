import styled from 'styled-components';
import { getBgdLightColor } from 'helpers';

export const UsersCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 24px;
  width: 680px;
  margin: 0 auto;
  background-color: ${getBgdLightColor};
`;

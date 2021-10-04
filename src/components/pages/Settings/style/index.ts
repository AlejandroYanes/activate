import styled from 'styled-components';
import { getBgdLightColor } from 'helpers';

export const Panel = styled.div`
  background: ${getBgdLightColor};
  border-radius: 16px;
  padding: 24px;
  width: min(94%, 860px);
  min-height: 500px;
  margin: 24px auto 48px;
  display: flex;
  align-items: stretch;
`;

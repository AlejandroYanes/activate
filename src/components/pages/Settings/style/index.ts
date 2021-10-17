import styled from 'styled-components';
import { getFontShadeColor } from 'activate-components';

export const Panel = styled.div`
  border: 1px solid ${getFontShadeColor};
  border-radius: 16px;
  padding: 24px;
  width: min(94%, 860px);
  min-height: 500px;
  margin: 24px auto 48px;
  display: flex;
  align-items: stretch;
`;

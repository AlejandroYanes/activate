import styled from 'styled-components';
import { getFontShadeColor } from 'helpers';

export const StyledSearch = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 0 0 16px;
  margin: 0 0 0 16px;
  border-left: 1px solid ${getFontShadeColor};
`;

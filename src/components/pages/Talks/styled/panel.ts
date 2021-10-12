import styled from 'styled-components';
import { getFontShadeColor } from 'helpers';
import UsersList from '../../../experience/UsersList';

export const Container = styled.section`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const Panel = styled.div`
  border: 1px solid ${getFontShadeColor};
  border-radius: 16px;
  width: min(94%, 860px);
  height: 100%;
  display: flex;
  align-items: stretch;
  position: relative;
`;

export const List = styled(UsersList)`
  width: calc(300px - 16px);
  min-width: calc(300px - 16px);
  margin: 16px 0 16px 16px;
  box-sizing: border-box;
  border-right: 2px solid ${getFontShadeColor};
`

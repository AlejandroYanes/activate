import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const StyledSearch = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled(SimpleBar)`
  padding: 0 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Expander = styled.span`
  flex: 1;
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
  padding: 16px;
`;

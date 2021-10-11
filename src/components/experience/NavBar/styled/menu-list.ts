import styled from 'styled-components';

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 90px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 32px;
  border-radius: 16px;
  height: calc(100vh - 64px);
`;

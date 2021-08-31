import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: normal;
  justify-items: center;
  align-items: stretch;
  column-gap: 16px;
  row-gap: 32px;
`;

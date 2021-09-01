import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: normal;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 32px;
  row-gap: 32px;
`;

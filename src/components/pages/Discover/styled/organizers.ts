import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  button {
    padding:  0 8px;
  }

  button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

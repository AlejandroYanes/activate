import styled from 'styled-components';

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Action = styled.div`
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  border-radius: 50%;
  position: absolute;
  display: flex;
  bottom: 16px;
  right: 12px;
`;

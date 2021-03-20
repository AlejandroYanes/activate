import styled from 'styled-components';

export const Liner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 2px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.ACCENT};
  transition: all 150ms linear;
`;

export const Event = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;

  &:hover {
    ${Liner} {
      top: 8px;
      left: 2px;
      bottom: 8px;
    }
  }
`;

import styled from 'styled-components';

export const Liner = styled.div`
  position: absolute;
  top: 4px;
  left: 6px;
  bottom: 4px;
  width: 2px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.ACCENT};
  transition: all 150ms linear;
`;

export const Event = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border-radius: 6px;
  margin-bottom: 16px;
  position: relative;
  transition: all 250ms linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BACKGROUND};

    ${Liner} {
      top: 8px;
      bottom: 8px;
    }
  }
`;

import styled from 'styled-components';

export const Options = styled.div`
  width: 25%;
  min-width: 20%;
  display: flex;
  flex-direction: column;
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.FONT};

  & > span {
  margin-left: 8px;
  }

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.BRAND_SHADE};

    & > span {
      color: ${({ theme }) => theme.colors.BRAND_DARK};
    }

    & > svg {
      g {
        stroke: ${({ theme }) => theme.colors.BRAND_DARK};
      }
    }
  }
`;

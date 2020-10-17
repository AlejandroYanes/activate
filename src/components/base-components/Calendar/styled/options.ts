import styled from 'styled-components';
import Colors from 'styles/colors';

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
  color: ${Colors.DARK};

  & > span {
  margin-left: 8px;
  }

  &:hover, &:focus {
    background-color: ${Colors.BRAND_SHADE};

    & > span {
      color: ${Colors.BRAND_DARK};
    }

    & > svg {
      g {
        stroke: ${Colors.BRAND_DARK};
      }
    }
  }
`;

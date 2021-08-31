import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

export const InputGroup = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  align-items: flex-end;
  ${getPositionStyles};

  & > div#term {
    flex: 1;

    input {
      //border-right: none;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }

  & > div#option {

    div[data-el="select-content"] {
      //border-left: none;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }

  button#search-button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

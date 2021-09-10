import styled from 'styled-components';
import {
  anyPropsAttrs,
  getFontShadeColor,
} from 'helpers';

export const InputGroup = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  margin: 24px 0 32px;
  border-radius: 50px;
  border: 1px solid ${getFontShadeColor};

  & > div#term {
    flex: 1;

    input {
      width: 100%;
      border: none;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }

  & > div#option {
    div[data-el="select-content"] {
      //width: 124px;
      width: 140px;
      border: none;
      padding: 8px 28px 8px 12px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;

      div[data-el="absolute-content"] {
        right: 6px;
      }
    }

    div[data-el="select-tray"] {
      left: auto;
    }
  }

  & > div#divider {
    width: 1px;
    min-width: 1px;
    height: 80%;
    margin: auto 0;
    background-color: ${getFontShadeColor};
  }

  button#search-button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

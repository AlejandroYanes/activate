import styled from 'styled-components';
import { getPositionStyles } from 'helpers';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${getPositionStyles};

  & > [data-el="input-wrapper"],
  & > [data-el="select-wrapper"] {
    margin-bottom: 32px;
  }
`;

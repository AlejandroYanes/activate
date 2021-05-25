import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

export const StyledSettings = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  border-radius: 16px;
  padding: ${({ asPanel }) => asPanel ? '12px 12px 20px' : '24px'};
`;

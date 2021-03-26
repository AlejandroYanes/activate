import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

export const StyledAvatarGroup = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  ${getPositionStyles};

  & > span {
    border: 3px solid ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  }

  & > span:not(:first-child) {
    margin-left: -12px;
  }
`;

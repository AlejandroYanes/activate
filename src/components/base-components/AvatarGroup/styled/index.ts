import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';

export const StyledAvatarGroup = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  align-items: center;
  ${getPositionStyles};

  & > div[data-el="avatar"] {
    border: 3px solid ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  }

  & > div[data-el="avatar"]:not(:first-child) {
    margin-left: -12px;
  }
`;

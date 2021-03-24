import styled from 'styled-components';
import { getPositionStyles } from 'helpers';

export const StyledAvatarGroup = styled.div`
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

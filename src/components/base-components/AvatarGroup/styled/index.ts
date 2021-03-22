import styled from 'styled-components';

export const StyledAvatarGroup = styled.div`
  display: flex;
  align-items: center;

  & > span {
    border: 3px solid ${({ theme }) => theme.colors.BACKGROUND};
  }

  & > span:not(:first-child) {
    margin-left: -12px;
  }
`;

import styled from 'styled-components';

export const StyledAvatarGroup = styled.div`
  display: flex;
  align-items: center;

  & > span:not(:first-child) {
    margin-left: -14px;
    border: 3px solid ${({ theme }) => theme.colors.BACKGROUND};
  }
`;

export const Text = styled.label`
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.FONT};
`;

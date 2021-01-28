import styled from 'styled-components';

export const StyledAvatarGroup = styled.div`
  display: flex;
  align-items: center;

  & > span:not(:first-child) {
    margin-left: -14px;
  }
`;

export const Text = styled.label`
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.FONT};
`;

import { AvatarGroup } from 'react-rainbow-components';
import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
`;

export const Users = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.FONT};
    font-size: 14px;
  }
`;

export const Avatars = styled(AvatarGroup)`
  & > span {
    height: 36px;
    width: 36px;

    &:not(:first-child) {
      margin-left: -14px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

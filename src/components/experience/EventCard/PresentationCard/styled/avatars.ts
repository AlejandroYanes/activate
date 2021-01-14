import styled from 'styled-components';
import { AvatarGroup } from 'react-rainbow-components';

export const Avatars = styled(AvatarGroup)`
  & > span {
    height: 36px;
    width: 36px;

    &:not(:first-child) {
      margin-left: -14px;
    }
  }
`;

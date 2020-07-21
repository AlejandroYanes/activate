import React, { FunctionComponent } from 'react';
import { StyledProfile, ProfileData, UserName } from './styled';
import Avatar from 'components/base-components/Avatar';

const ProfilePanel: FunctionComponent = () => (
  <StyledProfile>
    <ProfileData>
      <Avatar size="x-large" icon="user10" />
      <UserName>Scarlet</UserName>
    </ProfileData>
  </StyledProfile>
);

export default ProfilePanel;

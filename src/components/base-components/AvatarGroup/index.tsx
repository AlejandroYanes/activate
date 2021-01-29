/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, useMemo } from 'react';
import Avatar from 'components/base-components/Avatar';
import { StyledAvatarGroup, Text } from './styled';
import RenderIf from '../RenderIf';

interface Props {
  label?: string;
  icons: string[];
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
}

const AvatarGroup: FunctionComponent<Props> = (props) => {
  const { label, icons, size } = props;

  const avatars = useMemo(() => (
    icons.map((icon, index) => (
      <Avatar key={`${icon}-${index}`} size={size} icon={icon} />
    ))
  ), [icons, size]);

  return (
    <StyledAvatarGroup>
      {avatars}
      <RenderIf condition={!!label}>
        <Text>{label}</Text>
      </RenderIf>
    </StyledAvatarGroup>
  );
};

export default AvatarGroup;

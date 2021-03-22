/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, useMemo } from 'react';
import Avatar from 'components/base-components/Avatar';
import { StyledAvatarGroup } from './styled';
import RenderIf from '../RenderIf';
import { Text } from '../Typography';

interface Props {
  label?: string;
  icons: string[];
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
}

function resolveTextSize({ size }: Props) {
  switch (size) {
    case 'large':
    case 'x-large':
      return 'large';
    case 'x-small':
    case 'xx-small':
      return 'small';
    default:
      return 'medium';
  }
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
        <Text as="label" margin="0 0 0 6px" size={resolveTextSize(props)}>{label}</Text>
      </RenderIf>
    </StyledAvatarGroup>
  );
};

export default AvatarGroup;

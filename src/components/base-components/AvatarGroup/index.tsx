/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, useMemo } from 'react';
import { PositionProps } from 'helpers';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import { StyledAvatarGroup } from './styled';

interface Props extends PositionProps {
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
  const { label, icons, size, ...rest } = props;

  const avatars = useMemo(() => (
    icons.map((icon, index) => (
      <Avatar key={`${icon}-${index}`} size={size} icon={icon} />
    ))
  ), [icons, size]);

  return (
    <StyledAvatarGroup {...rest}>
      {avatars}
      <RenderIf condition={!!label}>
        <Text as="label" margin="0 0 0 6px" size={resolveTextSize(props)}>{label}</Text>
      </RenderIf>
    </StyledAvatarGroup>
  );
};

export default AvatarGroup;

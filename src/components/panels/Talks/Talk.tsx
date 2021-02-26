import React, { FunctionComponent } from 'react';
import Avatar from 'components/base-components/Avatar';
import RenderIf from 'components/base-components/RenderIf';
import { Text } from 'components/base-components/Typography';
import { ActiveDot, AvatarSection, Info, Talk as StyledTalk } from './styled';

interface Props {
  id: string;
  image: string;
  active: boolean;
  name: string;
  txt?: string;
  onClick: (event) => void;
}

const Talk: FunctionComponent<Props> = (props) => {
  const { id, image, active, name, txt, onClick } = props;

  return (
    <StyledTalk data-id={id} onClick={onClick}>
      <AvatarSection>
        <Avatar icon={image} />
        <RenderIf condition={active}>
          <ActiveDot />
        </RenderIf>
      </AvatarSection>
      <Info>
        <Text align="left">{name}</Text>
        <RenderIf condition={!!txt}>
          <Text align="left" size="small" color="gray" ellipsis>{txt}</Text>
        </RenderIf>
      </Info>
    </StyledTalk>
  );
};

export default Talk;

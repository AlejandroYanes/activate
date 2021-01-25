import React, { FunctionComponent } from 'react';
import Colors from 'styles/colors';
import Avatar from 'components/base-components/Avatar';
import Button from 'components/base-components/Button';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import {
  Actions,
  Content,
  Description,
  Events,
  Extras,
  Footer,
  LeftSection,
  Name,
  PublisherCard,
  Stat,
  TextSection,
} from './styled';

interface Props {
  id: string;
  image: string;
  name: string;
  description: string;
  events: number;
  followers: number;
}

const Publisher: FunctionComponent<Props> = (props) => {
  const { image, name, description, events, followers } = props;

  return (
    <PublisherCard>
      <Content>
        <LeftSection>
          <Avatar icon={image} size="x-large" />
          <Events>
            <SvgIcon icon={Icons.PUBLICITY} size="x-large" color={Colors.ACCENT_DARK} />
            <h3>{events}</h3>
            <span>Events</span>
          </Events>
        </LeftSection>
        <TextSection>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </TextSection>
      </Content>
      <Footer>
        <Extras>
          <Stat>
            <SvgIcon icon={Icons.USERS} color={Colors.GRAY} />
            <span>{`${followers} followers`}</span>
          </Stat>
        </Extras>
        <Actions>
          <Button
            onClick={() => undefined}
            label="View profile"
            color="success"
            variant="flat"
            sm
          />
        </Actions>
      </Footer>
    </PublisherCard>
  );
};

export default Publisher;

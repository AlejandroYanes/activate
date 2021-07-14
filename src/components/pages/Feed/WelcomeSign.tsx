import React, { FunctionComponent } from 'react';
import { useAuthData } from 'components/providers/Auth';
import { Layout } from 'components/providers/Layout';
import FlexBox from 'components/base-components/FlexBox';
import { Title } from 'components/base-components/Typography';
import Avatar from 'components/base-components/Avatar';
import RenderByLayout from 'components/base-components/RenderByLayout';

const PrimarySign = ({ name, avatar }) => (
  <FlexBox justify="space-between" align="flex-start" mB>
    <FlexBox direction="column" padding="0 48px 0 0">
      <Title level={1} color="brand" weight="bold" padding="0 0 8px 0">
        👋 Hello,
      </Title>
      <Title level={1} color="brand" weight="bold" padding="0 0 12px 0">
        {name}
      </Title>
      <Title level={2} color="brand" padding="0">
        Here are your upcoming events
      </Title>
    </FlexBox>
    <Avatar src={avatar} size="x-large" />
  </FlexBox>
);

const MobileSign = ({ name }) => (
  <FlexBox direction="column" mB>
    <Title level={1} color="brand" weight="bold" padding="0 0 8px 0">
      👋 Hello,
    </Title>
    <Title level={1} color="brand" weight="bold" padding="0 0 12px 0">
      {name}
    </Title>
    <Title level={2} color="secondary" padding="0">
      Your upcoming events
    </Title>
  </FlexBox>
);

const map = {
  [Layout.DESKTOP]: PrimarySign,
  [Layout.TABLET]: PrimarySign,
  [Layout.MOBILE]: MobileSign,
};

const WelcomeSign: FunctionComponent = () => {
  const { userInfo: { name, avatar } } = useAuthData();

  return (
    <RenderByLayout
      options={map}
      fallback={PrimarySign}
      name={name}
      avatar={avatar}
    />
  );
};

export default WelcomeSign;

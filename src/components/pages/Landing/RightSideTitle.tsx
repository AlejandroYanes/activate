import { FunctionComponent } from 'react';
import { Layout } from 'components/providers/Layout';
import FlexBox from 'components/base-components/FlexBox';
import { Title } from 'components/base-components/Typography';
import { LinkButton } from 'components/base-components/Button';
import RenderByLayout from 'components/base-components/RenderByLayout';
import Illustration from './Illustration';

const PrimaryRender = () => (
  <>
    <Title level={1} size={64} color="brand" weight="bold">
      event,
    </Title>
    <Title level={1} size={64} color="brand" weight="bold">
      anywhere,
    </Title>
    <Title
      level={1}
      size={64}
      color="brand"
      weight="bold"
      margin="0 0 32px 0"
    >
      anytime.
    </Title>
    <LinkButton
      to="/sign"
      label="Get started"
      variant="fill"
      color="brand"
      padding="0 24px"
      margin="0 auto 32px 0"
    />
  </>
);

const MobileRender = () => (
  <FlexBox justify="space-between" align="flex-start" margin="32px 0 0 0">
    <LinkButton
      to="/sign"
      label="Get started"
      variant="fill"
      color="brand"
      padding="0 24px"
    />
    <Illustration />
  </FlexBox>
);

const layoutMap = {
  [Layout.DESKTOP]: PrimaryRender,
  [Layout.TABLET]: PrimaryRender,
  [Layout.MOBILE]: MobileRender,
};

const RightSideTitle: FunctionComponent = () => {
  return (
    <RenderByLayout options={layoutMap} />
  );
};

export default RightSideTitle;

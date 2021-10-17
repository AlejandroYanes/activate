import { FunctionComponent } from 'react';
import {
  FlexBox,
  Layout,
  LinkButton,
  RenderByLayout,
  Title,
} from 'activate-components';
import Illustration from './Illustration';

const fontSize = 64;

const PrimaryRender = () => (
  <>
    <Title level={1} size={fontSize} color="brand" weight="bold">
      event,
    </Title>
    <Title level={1} size={fontSize} color="brand" weight="bold">
      anywhere,
    </Title>
    <Title
      level={1}
      size={fontSize}
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

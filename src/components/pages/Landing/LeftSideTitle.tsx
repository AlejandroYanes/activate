import { FunctionComponent } from 'react';
import { Layout } from 'components/providers/Layout';
import { Title } from 'components/base-components/Typography';
import RenderByLayout from 'components/base-components/RenderByLayout';
import Illustration from './Illustration';

const PrimaryRender = () => (
  <>
    <Title
      level={1}
      size={64}
      align="right"
      color="brand"
      weight="light"
    >
      Find any
    </Title>
    <Title
      level={1}
      size={64}
      align="right"
      color="brand"
      weight="light"
      margin="0 0 32px 0"
    >
      happening
    </Title>
    <Illustration />
  </>
);

const MobileRender = () => (
  <>
    <Title
      level={1}
      size={64}
      color="brand"
      weight="light"
    >
      Find any
    </Title>
    <Title
      level={1}
      size={64}
      align="right"
      color="brand"
      weight="bold"
    >
      event,
    </Title>
    <Title
      level={1}
      size={64}
      color="brand"
      weight="light"
    >
      happening
    </Title>
    <Title
      level={1}
      size={64}
      align="right"
      color="brand"
      weight="bold"
    >
      anywhere, <br />
      anytime.
    </Title>
  </>
);

const layoutMap = {
  [Layout.DESKTOP]: PrimaryRender,
  [Layout.TABLET]: PrimaryRender,
  [Layout.MOBILE]: MobileRender,
};

const LeftSideTitle: FunctionComponent = () => {
  return (
    <RenderByLayout options={layoutMap} />
  );
};

export default LeftSideTitle;

import { Layout, useAppLayout } from 'components/providers/Layout';
import { SpinningDots } from 'components/base-components/Loaders';
import FlexBox from 'components/base-components/FlexBox';

const widthMap = {
  [Layout.DESKTOP]: 420,
  [Layout.TABLET]: 420,
  [Layout.MOBILE]: '100%',
};

const LoadingScreen = () => {
  const layout = useAppLayout();

  return (
    <FlexBox
      width={widthMap[layout]}
      direction="column"
      justify="center"
      align="center"
      padding="48px"
    >
      <SpinningDots size="large" />
    </FlexBox>
  );
};

export default LoadingScreen;

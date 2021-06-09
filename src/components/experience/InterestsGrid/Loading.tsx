import { SpinningDots } from 'components/base-components/Loaders';
import FlexBox from 'components/base-components/FlexBox';

const Loading = () => {

  return (
    <FlexBox
      width="100%"
      direction="column"
      justify="center"
      align="center"
      padding="48px"
    >
      <SpinningDots size="large" />
    </FlexBox>
  );
};

export default Loading;

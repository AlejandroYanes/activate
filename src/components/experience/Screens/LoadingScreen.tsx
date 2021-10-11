import { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { SpinningDots } from 'components/base-components/Loaders';
import FlexBox from 'components/base-components/FlexBox';

const LoadingScreen: FunctionComponent<PositionProps> = (props) => {
  return (
    <FlexBox
      width="100%"
      direction="column"
      justify="center"
      align="center"
      {...props}
    >
      <SpinningDots size="large" />
    </FlexBox>
  );
};

LoadingScreen.defaultProps = {
  padding: '48px',
};

export default LoadingScreen;

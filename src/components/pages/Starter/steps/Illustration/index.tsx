import { FunctionComponent } from 'react';
import {
  useAppLayout,
  Layout,
} from 'activate-components';
import {
  ManHoldingBubble,
  ManWithCheckList,
  ManWriting,
} from 'components/illustrations';
import { Aside } from '../../styled';

interface Props {
  step: 1 | 2 | 3;
  height?: number;
}

const illustrationsMap = {
  1: ManWithCheckList,
  2: ManWriting,
  3: ManHoldingBubble,
};

const heightMap = {
  [Layout.DESKTOP]: 420,
  [Layout.TABLET]: 320,
  [Layout.MOBILE]: 320,
};

const Illustration: FunctionComponent<Props> = (props) => {
  const { step, height } = props;
  const layout = useAppLayout();
  const StepIllustration = illustrationsMap[step];

  return (
    <Aside>
      <StepIllustration height={height || heightMap[layout]} />
    </Aside>
  );
};

export default Illustration;

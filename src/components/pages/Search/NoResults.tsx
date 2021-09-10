import Emoji from 'components/base-components/Emoji';
import FlexBox from 'components/base-components/FlexBox';
import { Title } from 'components/base-components/Typography';

const NoResults = () => (
  <FlexBox direction="column" align="center" margin="0 auto">
    <Emoji size="page">🙊</Emoji>
    <Title level={2} mT color="secondary">We found nothing...</Title>
  </FlexBox>
);

export default NoResults;

import { Emoji, FlexBox, Title } from 'activate-components';

const NoResults = () => (
  <FlexBox direction="column" align="center" margin="0 auto">
    <Emoji size="page">🙊</Emoji>
    <Title level={2} mT color="secondary">We found nothing...</Title>
  </FlexBox>
);

export default NoResults;

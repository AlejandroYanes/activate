import Page from 'components/base-components/Page';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import Emoji from 'components/base-components/Emoji';
import ProfileData from './ProfileData';

const PrivateAccount = ({ user }) => (
  <Page>
    <FlexBox direction="column" align="stretch" width={680} margin="0 auto">
      <ProfileData user={user} />
      <FlexBox direction="column" align="center">
        <Emoji size="page">🔒</Emoji>
        <Title level={2} mT>This account is private.</Title>
        <Text padding="4px 0">
          You need to be friend with this user to see more of his profile.
        </Text>
      </FlexBox>
    </FlexBox>
  </Page>
);

export default PrivateAccount;

import Page from 'components/base-components/Page';
import { Text } from 'components/base-components/Typography';
import { MessageScreen } from 'components/experience/Screens';
import ProfileData from './ProfileData';

const PrivateAccount = ({ user }) => (
  <Page>
    <ProfileData user={user} />
    <MessageScreen icon="LOCK" color="FONT" title="This account is private.">
      <Text>
        You need to be friend with this user to see more of his profile.
      </Text>
    </MessageScreen>
  </Page>
);

export default PrivateAccount;

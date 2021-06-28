import Page from 'components/base-components/Page';
import FlexBox from 'components/base-components/FlexBox';
import SvgIcon from 'components/base-components/SvgIcon';
import { Text, Title } from 'components/base-components/Typography';
import ProfileData from './ProfileData';

const PrivateAccount = ({ user }) => (
  <Page>
    <ProfileData user={user} />
    <FlexBox direction="column" align="center">
      <SvgIcon icon="LOCK" size="page" />
      <Title level={3}>
        This account is private.
      </Title>
      <Text>
        You need to be friend with this user to see more of his profile.
      </Text>
    </FlexBox>
  </Page>
);

export default PrivateAccount;

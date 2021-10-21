import { FunctionComponent, ReactNode } from 'react';
import {
  Avatar,
  Emoji,
  FlexBox,
  formatAmount,
  Modal,
  Text,
  Title
} from 'activate-components';
import { ConsumerModel } from 'models/user';

interface Props {
  user: ConsumerModel;
  header: ReactNode;
  goBack: () => void;
}

const PrivateAccount: FunctionComponent<Props> = (props) => {
  const { user, header, goBack } = props;
  const {
    avatar,
    name,
    userName,
    count: {
      following,
      friends,
    },
  } = user;

  return (
    <Modal visible title={header} onClose={goBack} size="mobile">
      <FlexBox
        data-el="profile-modal-body"
        direction="column"
        align="stretch"
        padding="0 16px 16px"
      >
        <FlexBox
          data-el="avatar-section"
          align="center"
          padding="8px"
        >
          <Avatar size="xx-large" src={avatar} />
          <FlexBox justify="space-around" grow>
            <FlexBox direction="column" align="center">
              <Text>Following</Text>
              <Title level={2} color="accent">{formatAmount(following)}</Title>
            </FlexBox>
            <FlexBox direction="column" align="center">
              <Text>Friends</Text>
              <Title level={2} color="accent">{formatAmount(friends)}</Title>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox
          data-el="user-section"
          direction="column"
          align="flex-start"
          padding="16px 8px"
        >
          <Text>{userName}</Text>
          <Title level={2} color="brand">
            {name}
          </Title>
        </FlexBox>
        <FlexBox padding="32px 0 0 0" direction="column" align="center">
          <Emoji size="page">🔒</Emoji>
          <Title level={2} mT>
            This account is private.
          </Title>
          <Text padding="0 12px" align="center">
            You need to be friend with this user to see more of his profile.
          </Text>
        </FlexBox>
      </FlexBox>
    </Modal>
  );
}

export default PrivateAccount;

import React, { FunctionComponent } from 'react';
import { Layout, useAppLayout } from 'components/base-components/Configuration';
import SvgIcon from 'components/base-components/SvgIcon';
import { Text, Title } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import { Button } from 'components/base-components/Button';
import Modal from 'components/base-components/Modal';

interface Props {
  isVisible: boolean;
  title: string;
  onAccept: () => void;
  onClose: () => void;
}

function resolveSize(layout: Layout) {
  switch (layout) {
    case Layout.DESKTOP:
      return 'small';
    case Layout.TABLET:
      return 'medium';
    default:
      return 'large';
  }
}

const UnfollowModal: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { isVisible, title, onAccept, onClose } = props;

  return (
    <Modal size={resolveSize(layout)} visible={isVisible} onClose={onClose}>
      <FlexBox direction="column" align="center">
        <SvgIcon
          icon="REMOVE_BOOKMARK"
          color="ERROR_FONT"
          size="large"
          height={60}
          width={60}
        />
        <Text
          size="large"
          align="center"
          padding="16px 0 8px 0"
        >
          Stop following this event?
        </Text>
        <Title level={3} align="center" padding="0 0 16px 0">{title}</Title>
        <Text align="center" padding="0 0 24px 0">
          You are about to stop following this event,
          you will not receive any updates or notifications related to it.
        </Text>
        <Button
          onClick={onAccept}
          label="Unfollow"
          variant="fill"
          color="error"
        />
      </FlexBox>
    </Modal>
  );
};

export default UnfollowModal;

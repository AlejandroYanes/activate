import React, { FunctionComponent } from 'react';
import { useAppColors } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import { Text } from 'components/base-components/Typography';
import FlexBox from 'components/base-components/FlexBox';
import Button from 'components/base-components/Button';
import Modal from 'components/base-components/Modal';
import { Layout, useAppLayout } from '../../providers/Layout';

interface Props {
  isVisible: boolean;
  title: string;
  onAccept: () => void;
  onClose: () => void;
}

const UnfollowModal: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const colors = useAppColors();
  const { isVisible, title, onAccept, onClose } = props;

  const modalSize = layout === Layout.MOBILE ? 'large' : 'medium';

  return (
    <Modal size={modalSize} visible={isVisible} onClose={onClose}>
      <FlexBox direction="column" align="center">
        <SvgIcon
          icon={Icons.REMOVE_BOOKMARK}
          color={colors.ERROR}
          size="large"
          height={60}
          width={60}
        />
        <Text
          size="large"
          align="center"
          weight="lighter"
          padding="16px 0 8px 0"
        >
          Unfollow this event:
        </Text>
        <Text size="large" align="center" padding="0 0 16px 0">{title}</Text>
        <Text color="secondary" align="center" padding="16px 0 24px 0">
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

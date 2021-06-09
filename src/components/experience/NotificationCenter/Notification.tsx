import React, { FunctionComponent, useCallback, useEffect } from 'react';
import {
  NotificationDuration,
  NotificationModel,
  NotificationType,
} from 'notifications';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import { Text } from 'components/base-components/Typography';
import RenderIf from 'components/base-components/RenderIf';
import Icon from './Icon';
import { Content, Notification as StyledNotification } from './styled/notification';

interface Props extends NotificationModel {
  onClose: (id: string) => void;
}

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { x: 50, opacity: 0, transition: { duration: 0.3 } },
};

function resolveTitle(title: string, type: NotificationType) {
  if (title) {
    return title;
  }

  switch (type as NotificationType) {
    case NotificationType.SUCCESS:
      return 'Good, we made it:';
    case NotificationType.INFO:
      return 'You may want to know:';
    case NotificationType.WARNING:
      return 'You need to know:';
    case NotificationType.ERROR:
      return 'Oops, something went wrong:';
    default:
      return '';
  }
}

const Notification: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { id, type, duration, title, message, onClose } = props;

  const handleOnClose = useCallback(() => {
    onClose(id);
  }, [onClose]);

  useEffect(() => {
    if (duration !== NotificationDuration.INDEFINITE) {
      setTimeout(() => onClose(id), duration);
    }
  }, []);

  return (
    <StyledNotification
      layout
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      color={colors[type]}
    >
      <Icon type={type} />
      <Content>
        <Text>{resolveTitle(title, type)}</Text>
        <RenderIf condition={typeof message === 'string'} fallback={message}>
          <Text>{message}</Text>
        </RenderIf>
      </Content>
      <IconButton
        buttonColor="background"
        color={colors.FONT}
        icon={Icons.CLOSE}
        onClick={handleOnClose}
      />
    </StyledNotification>
  );
};

export default Notification;

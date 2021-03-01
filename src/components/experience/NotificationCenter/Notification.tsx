import React, { FunctionComponent, useEffect } from 'react';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import { Text } from 'components/base-components/Typography';
import Icon from './Icon';
import { Content, Notification as StyledNotification } from './styled/notification';
import { NotificationDuration, NotificationModel, NotificationType } from './types';

interface Props extends NotificationModel {
  onClose: (id: string) => void;
}

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { x: 50, opacity: 0, transition: { duration: 0.3 } },
};

function resolveTitle(type) {
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

  const { id, type, duration, message, onClose } = props;

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
        <Text color="background">{resolveTitle(type)}</Text>
        <Text color="background">{message}</Text>
      </Content>
      <IconButton
        onClick={() => onClose(id)}
        icon={Icons.CLOSE}
        color={colors.BACKGROUND}
        buttonColor="background"
      />
    </StyledNotification>
  );
};

export default Notification;

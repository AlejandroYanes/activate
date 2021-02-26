import React, { FunctionComponent, useEffect } from 'react';
import { useAppColors } from 'components/providers/Theme';
import { Icons } from 'components/base-components/SvgIcon';
import IconButton from 'components/base-components/IconButton';
import Icon from './Icon';
import { Message, Notification as StyledNotification } from './styled/notification';
import { NotificationDuration, NotificationModel } from './types';

interface Props extends NotificationModel {
  onClose: (id: string) => void;
}

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { x: 50, opacity: 0, transition: { duration: 0.3 } },
};

const Notification: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();

  const { id, type, duration, message, onClose } = props;

  console.log(type, duration);

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
      <Message color="white" mR mL>{message}</Message>
      <IconButton
        onClick={() => onClose(id)}
        icon={Icons.CLOSE}
        color={colors.WHITE}
        buttonColor="font"
      />
    </StyledNotification>
  );
};

export default Notification;

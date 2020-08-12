import React, { FunctionComponent } from 'react';
import { StyledNotification, Header, Image, TitleSection, Title, DateStamp, Message } from './styled';
import { PositionProps } from 'components/_base';

interface Props extends PositionProps {
  image: string;
  title: string;
  date: Date;
  message: string;
}

const dateFormatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
});

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Notification: FunctionComponent<Props> = (props) => {
  const { image, title, date, message, ...margins } = props;

  return (
    <StyledNotification {...margins} variants={item}>
      <Header>
        <Image src={image} alt="event" />
        <TitleSection>
          <Title>{title}</Title>
          <DateStamp>{dateFormatter.format(date)}</DateStamp>
        </TitleSection>
      </Header>
      <Message>{message}</Message>
    </StyledNotification>
  );
};

export default Notification;
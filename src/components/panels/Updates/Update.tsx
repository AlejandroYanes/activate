import React, { FunctionComponent } from 'react';
import { formatShortDate, PositionProps } from 'helpers';
import {
  StyledNotification,
  Header,
  Image,
  TitleSection,
  Title,
  DateStamp,
  Message,
} from './styled';

interface Props extends PositionProps {
  image: string;
  title: string;
  date: Date;
  message: string;
}

const Update: FunctionComponent<Props> = (props) => {
  const { image, title, date, message, ...margins } = props;

  return (
    <StyledNotification {...margins}>
      <Header>
        <Image src={image} alt="event" />
        <TitleSection>
          <Title>{title}</Title>
          <DateStamp>{formatShortDate(date)}</DateStamp>
        </TitleSection>
      </Header>
      <Message>{message}</Message>
    </StyledNotification>
  );
};

export default Update;

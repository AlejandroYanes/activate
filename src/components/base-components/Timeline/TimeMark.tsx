import React, { FunctionComponent } from 'react';
import { Content, DateLabel, Item, Track, TrackLine, TrackMark } from './styled';

export interface TimeMarkProps {
  date: string;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TimeMark: FunctionComponent<TimeMarkProps> = (props) => {
  const { date, children } = props;

  return (
    <Item variants={item}>
      <Track>
        <TrackMark />
        <TrackLine />
      </Track>
      <Content>
        <DateLabel>{date}</DateLabel>
        {children}
      </Content>
    </Item>
  );
};

export default TimeMark;

import React, { FunctionComponent } from 'react';
import { Content, DateLabel, Item, Track, TrackLine, TrackMark } from './styled';

export interface TimeMarkProps {
  date: string;
}

const TimeMark: FunctionComponent<TimeMarkProps> = (props) => {
  const { date, children } = props;

  return (
    <Item>
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

import React, { FunctionComponent } from 'react';
import { formatTime, getDayOfTheWeek, getShortDate, PositionProps } from 'helpers';
import { Icons } from 'components/base-components/SvgIcon';
import Badge from 'components/base-components/Badge';
import { Card, Content, DateSection, Description, Subheader, Title } from './styled/card';
import { DateBadge } from './styled/date-badge';

interface Props extends PositionProps {
  title: string;
  date: Date;
  description: string;
  comments: number;
}

// const tomorrow = addDays(new Date(), 1);

const SummaryCard: FunctionComponent<Props> = (props) => {
  const { title, description, date, comments, ...positionProps } = props;

  return (
    <Card {...positionProps}>
      <DateSection>
        <DateBadge>
          <span>{getDayOfTheWeek(date).slice(0, 3)}</span>
          <span>{getShortDate(date)}</span>
          <div />
          <span>{formatTime(date)}</span>
        </DateBadge>
        {/* <DateBadge inverted> */}
        {/* <span>{getDayOfTheWeek(tomorrow).slice(0, 3)}</span> */}
        {/* <span>{getShortDate(tomorrow)}</span> */}
        {/* <div /> */}
        {/* <span>{formatTime(tomorrow)}</span> */}
        {/* </DateBadge> */}
      </DateSection>
      <Content>
        <Title>{title}</Title>
        <Subheader>
          <Badge
            sm
            mR
            color="success"
            icon={Icons.MAP_PIN}
            label="Varadero, Matanzas, Cuba"
          />
          <Badge icon={Icons.CLOCK} color="light" label="30 min" sm />
        </Subheader>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
};

export default SummaryCard;

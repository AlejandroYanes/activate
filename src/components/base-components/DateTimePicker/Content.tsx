import React, { FunctionComponent, useMemo } from 'react';
import { formatDate, formatDateTime, formatTime } from 'helpers';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { StyledContent, Separator, DateStamp } from './styled/content';

interface Props {
  value: Date | Date[];
  type: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range';
  padRight: boolean;
  onClick: () => void;
}

function getDateString(
  date: Date,
  type: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range',
) {
  if (date) {
    switch (type) {
      case 'date':
      case 'date-range':
        return formatDate(date);
      case 'time':
      case 'time-range':
        return formatTime(date);
      default:
        return formatDateTime(date);
    }
  }
  return undefined;
}

const Content: FunctionComponent<Props> = (props) => {
  const { type, value, padRight, onClick } = props;
  const useRange = type === 'date-range' || type === 'time-range';

  const startDate = useMemo(() => {
    const date = useRange && value ? value[0] : value;
    return getDateString(date, type);
  }, [type, useRange, value]);

  const endDate = useMemo(() => {
    const date = useRange && value ? value[1] : undefined;
    return getDateString(date, type);
  }, [type, useRange, value]);

  const iconSize = type === 'date-time' && useRange ? 'large' : 'medium';

  return (
    <StyledContent onClick={onClick} padRight={padRight} tabIndex={0}>
      <SvgIcon icon={Icons.CALENDAR_FILLED} size={iconSize} />
      <DateStamp>{startDate}</DateStamp>
      <RenderIf condition={!!endDate}>
        <Separator />
        <DateStamp>{endDate}</DateStamp>
      </RenderIf>
    </StyledContent>
  );
};

export default Content;

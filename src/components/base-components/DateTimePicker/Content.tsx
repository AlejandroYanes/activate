import React, { FunctionComponent, useMemo } from 'react';
import { formatDate, formatDateTime, formatTime } from 'helpers';
import { useAppTheme } from 'components/providers/Theme';
import SvgIcon, { Icons } from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { StyledContent, Separator, DateStamp } from './styled/content';

interface Props {
  value: Date | Date[];
  type: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range';
  padRight: boolean;
  isFocused: boolean;
  onClick: () => void;
  onFocus: () => void;
  onBlur: () => void;
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
  const { colors, useDarkStyle } = useAppTheme();
  const { type, value, isFocused, padRight, onClick, onFocus, onBlur } = props;
  const useRange = type === 'date-range' || type === 'time-range';

  const startDate = useMemo(() => {
    const date = useRange && value ? value[0] : value;
    return getDateString(date, type);
  }, [type, useRange, value]);

  const endDate = useMemo(() => {
    const date = useRange && value ? value[1] : undefined;
    return getDateString(date, type);
  }, [type, useRange, value]);

  const iconColor = useMemo(() => {
    if (isFocused) {
      return useDarkStyle
        ? colors.BRAND
        : colors.BRAND_DARK;
    }

    return colors.FONT;
  }, [isFocused, useDarkStyle, colors]);

  const iconSize = type === 'date-time' && useRange ? 'large' : 'medium';

  return (
    <StyledContent
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      padRight={padRight}
      tabIndex={0}
    >
      <SvgIcon
        size={iconSize}
        color={iconColor}
        icon={Icons.CALENDAR_FILLED}
      />
      <DateStamp>{startDate}</DateStamp>
      <RenderIf condition={!!endDate}>
        <Separator />
        <DateStamp>{endDate}</DateStamp>
      </RenderIf>
    </StyledContent>
  );
};

export default Content;

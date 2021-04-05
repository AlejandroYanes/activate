import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
} from 'date-fns';

const dateFormatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export function formatDate(date: Date): string {
  return date ? dateFormatter.format(date) : undefined;
}

const timeFormatter = new Intl.DateTimeFormat('default', {
  hour12: true,
  hour: 'numeric',
  minute: 'numeric',
});

export function formatTime(date: Date): string {
  return date ? timeFormatter.format(date) : undefined;
}

const dateTimeFormatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

export function formatDateTime(date: Date): string {
  return date ? dateTimeFormatter.format(date) : undefined;
}

const dayFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: 'long',
});

export function getDayOfTheWeek(date: Date): string {
  return date ? dayFormatter.format(date) : undefined;
}

const shortDateFormatter = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'short',
});

export function formatShortDate(date: Date): string {
  return date ? shortDateFormatter.format(date) : undefined;
}

const monthFormatter = new Intl.DateTimeFormat('default', {
  month: 'long',
});

export function getMonthLabel(date: Date): string {
  return date ? monthFormatter.format(date) : undefined;
}

const yearFormatter = new Intl.DateTimeFormat('default', {
  year: 'numeric',
});

export function getYear(date: Date): string {
  return date ? yearFormatter.format(date) : undefined;
}

const monthYearFormatter = new Intl.DateTimeFormat('default', {
  month: 'long',
  year: 'numeric',
});

export function getMonthYear(date: Date): string {
  return date ? monthYearFormatter.format(date) : undefined;
}

function resolveTimeUnit(date: Date, baseDate: Date) {
  const units = [
    { unit: 'month', diffFunction: differenceInMonths },
    { unit: 'day', diffFunction: differenceInDays },
    { unit: 'hour', diffFunction: differenceInHours },
    { unit: 'minute', diffFunction: differenceInMinutes },
  ];

  const unitOfTime = units.find((unit) => unit.diffFunction(baseDate, date) !== 0);

  if (!!unitOfTime) {
    const { diffFunction, unit } = unitOfTime;
    const difference = diffFunction(baseDate, date);

    return {
      unit: Math.abs(difference) === 1 ? unit : `${unit}s`,
      diff: difference,
    };
  }

  return { unit: 'equal' };
}

const relativeTimeFormatter = new Intl.RelativeTimeFormat('default', {
  style: 'long',
  numeric: "auto"
});

export function getRelativeTime(baseDate: Date, date:Date) {
  const { unit, diff } = resolveTimeUnit(baseDate, date);

  if (unit === 'equal') {
    return 'Right now';
  }

  return relativeTimeFormatter.format(diff, unit as any);
}

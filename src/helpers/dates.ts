const dateFormatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}

const timeFormatter = new Intl.DateTimeFormat('default', {
  hour12: true,
  hour: 'numeric',
  minute: 'numeric',
});

export function formatTime(date: Date): string {
  return timeFormatter.format(date);
}

const dateTimeFormatter = new Intl.DateTimeFormat('default', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

export function formatDateTime(date: Date): string {
  return dateTimeFormatter.format(date);
}

const dayFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: 'long',
});

export function getDayOfTheWeek(date: Date): string {
  return dayFormatter.format(date);
}

const shortDateFormatter = new Intl.DateTimeFormat(undefined, {
  day: 'numeric',
  month: 'short',
});

export function getShortDate(date: Date): string {
  return shortDateFormatter.format(date);
}

const monthFormatter = new Intl.DateTimeFormat('default', {
  month: 'long',
});

export function getMonthLabel(date: Date): string {
  return monthFormatter.format(date);
}

const yearFormatter = new Intl.DateTimeFormat('default', {
  year: 'numeric',
});

export function getYear(date: Date): string {
  return yearFormatter.format(date);
}

const monthYearFormatter = new Intl.DateTimeFormat('default', {
  month: 'long',
  year: 'numeric',
});

export function getMonthYear(date: Date): string {
  return monthYearFormatter.format(date);
}

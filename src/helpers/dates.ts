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

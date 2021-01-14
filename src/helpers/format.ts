const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatCurrency(number: number | string): string {
  return currencyFormatter.format(parseFloat(number as any) || 0);
}

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
  hour12: true,
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
